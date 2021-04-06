import { Product } from "./Product";
import { LocalBasket } from "./LocalBasket";
import { Delivery } from "./Delivery";

interface Products {
    [id: number]: ProductSizes;
};

interface ProductSizes {
    [sku: string]: Product;
};

export class Basket {
    subTotal: number;
    delivery?: Delivery;
    total: number;
    products: Products[];

    constructor(products: Products[] = []) {
        this.subTotal = 0;
        this.delivery = undefined;
        this.total = 0;
        this.products = products;
    }

    static createFromStorage(localBasket: LocalBasket) {
        this.subTotal = 0;
        this.delivery = undefined;
        this.total = 0;
        this.products = [];

        for (const key in localBasket.products) {
            this.addProduct(localBasket.products[key]);
        }
    }

    addProduct(product: Product): void {
        const { id, quantity } = product;
        const sku = product.getSku();
        const existingProduct = this.getProduct(id, sku);

        if (existingProduct !== undefined) {
            this.subTotal += product.getLinePrice();
            existingProduct.add(quantity);
            this.products[id][sku] = existingProduct;

            return;
        }

        if (this.products[id] === undefined) {
            this.products[id] = [];
        }

        this.products[id][sku] = product;
        this.subTotal += product.getLinePrice();
    }

    getProduct(id: number, sku: string): Product|undefined {
        const productVariations = this.products[id];

        if (productVariations === undefined) {
            return undefined;
        }

        if (productVariations[sku] === undefined) {
            return undefined;
        }

        return productVariations[sku];
    }
    
    setProduct(product: Product): void {
        const sku = product.getSku();
        const existingProduct = this.getProduct(product.id, sku);

        if (existingProduct !== undefined) {
            existingProduct.add(product.quantity);
            this.products[product.id][sku] = existingProduct;

            return;
        }

        this.products[product.id][sku] = product;
    }

    hasProduct(id: number, sku: string): boolean {
        return this.getProduct(id, sku) !== undefined;
    }

    getSubTotal(): number
    {
        return this.subTotal;
    }

    updateDelivery(delivery: AttributeDTO): void {
        this.delivery = new Delivery(delivery.handle, delivery.value);
    }

    getDeliveryTotal(): number
    {
        return this.delivery?.getTotal() ?? 0;
    }

    getTotal(): number
    {
        return this.getSubTotal() + this.getDeliveryTotal();
    }
};
