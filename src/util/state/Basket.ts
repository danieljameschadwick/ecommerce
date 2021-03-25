import { Product } from "./Product";

interface Products {
    [id: number]: ProductSizes;
}

interface ProductSizes {
    [sku: string]: Product;
}

export class Basket {
    products: Products[];

    constructor(products: Products[] = []) {
        this.products = products;
    }

    addProduct(product: Product): void {
        const { id, quantity } = product;
        const sku = product.getSku();
        const existingProduct = this.getProduct(id, sku);

        if (existingProduct !== undefined) {
            existingProduct.add(quantity);
            this.products[id][sku] = existingProduct;

            return;
        }

        if (this.products[id] === undefined) {
            this.products[id] = [];
        }

        this.products[id][sku] = product;
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
};
