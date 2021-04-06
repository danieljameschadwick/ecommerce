export class Delivery {
    handle: string;
    value: number;

    constructor(handle: string, value: number) {
        this.handle = handle;
        this.value = value;
    }

    getTotal(): number
    {
        return this.value;
    }
};
