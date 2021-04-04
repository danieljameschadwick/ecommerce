export interface AttributeDTO {
    id: number;
    handle: string;
    value: string;
    name?: string;
};

export class Attribute implements AttributeDTO {
    id: number;
    handle: string;
    value: string;
    name?: string;

    constructor(id: number, handle: string, value: string, name?: string) {
        this.id = id;
        this.handle = handle;
        this.value = value;
        this.name = name;
    }

    static createFromData(data: AttributeDTO): Attribute {
        return new Attribute(
            data.id,
            data.handle,
            data.value,
            data.name,
        );
    }
}
