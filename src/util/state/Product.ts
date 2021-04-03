import { Attribute } from './Attribute';

export class Product {
    id: number;
    price: number;
    quantity: number;
    attributes: Attribute[];

    constructor(id: number, price: number, quantity: number, attributes: Attribute[] = []) {
        this.id = id;
        this.price = price;
        this.quantity = quantity;
        this.attributes = attributes;
    }

    add(quantity: number): void 
    {
        this.quantity += quantity;
    }

    getSku(): string
    {
        const sku = this.attributes.map((attribute) => {
            return `${attribute.handle}-`;
        }).toString().slice(0, -1);

        return `${this.id}-${sku}`;
    }

    getPrice(): number
    {
        return this.price;
    }

    getQuantity(): number
    {
        return this.quantity;
    }
};
