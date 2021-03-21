export class Product {
    id: number;
    size: string;
    quantity: number;

    constructor(id: number, size: string, quantity: number) {
        this.id = id;
        this.size = size;
        this.quantity = quantity;
    }

    add(quantity: number): void {
        this.quantity += quantity;
    }
};

interface Products {
    [id: number]: ProductSizes;
}

interface ProductSizes {
    [size: string]: Product;
}

export class Basket {
    products: Products;

    constructor(products: Products = []) {
        this.products = products;
    }

    addProduct(product: Product): void {
        const existingProduct = this.getProduct(product.id, product.size);
        const { id, size, quantity } = product;

        if (existingProduct !== undefined) {
            existingProduct.add(quantity);
            this.products[id][size] = existingProduct;

            return;
        }

        if (this.products[id] === undefined) {
            this.products[id] = [];
        }

        this.products[id][size] = product;
    }

    getProduct(id: number, size: string): Product|undefined {
        const products = this.products[id];

        if (products === undefined) {
            return undefined;
        }

        if (products[size] === undefined) {
            return undefined;
        }

        return products[size];
    }
    
    setProduct(product: Product): void {
        const existingProduct = this.getProduct(product.id, product.size);

        if (existingProduct !== undefined) {
            existingProduct.add(product.quantity);
            this.products[product.id][product.size] = existingProduct;

            return;
        }

        this.products[product.id][product.size] = product;
    }

    hasProduct(id: number, size: string): boolean {
        return this.getProduct(id, size) !== undefined;
    }
};
