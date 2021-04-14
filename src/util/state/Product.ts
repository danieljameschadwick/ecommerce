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

    increment(): void
    {
        this.quantity++;
    }

    decrement(): void
    {
        this.quantity--;
    }

    getSku(): string
    {
        const sku = this.attributes.map((attribute) => {
            return `${attribute.value}-`;
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

    getLinePrice(): number
    {
        return this.getQuantity() * this.getPrice();
    }

    getAttributes(): Attribute[]
    {
        return this.attributes;
    }
};
