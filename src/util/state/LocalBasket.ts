import { Product } from "./Product";

export class LocalBasket {
    products: Product[];

    constructor(products: Product[] = []) {
        this.products = products;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }
};
