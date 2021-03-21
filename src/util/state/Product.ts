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
