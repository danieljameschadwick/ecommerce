import { Product } from "./Product";
import { Delivery } from "./Delivery";

export class LocalBasket {
    products: Product[];
    delivery?: Delivery;

    constructor(products: Product[] = [], delivery?: Delivery) {
        this.products = products;
        this.delivery = delivery;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getDelivery(): Delivery|undefined
    {
        return this.delivery;
    }
};
