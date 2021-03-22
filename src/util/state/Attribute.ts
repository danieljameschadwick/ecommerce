interface AttributeDTO {
    id: number;
    type: string;
    handle: string;
};

export class Attribute implements AttributeDTO {
    id: number;
    type: string;
    handle: string;
    name?: string;

    constructor(id: number, type: string, handle: string, name?: string) {
        this.id = id;
        this.type = type;
        this.handle = handle;
        this.name = name;
    }

    static createFromData(data: AttributeDTO): Attribute {
        return new Attribute(
            data.id,
            data.type,
            data.handle,
            data.name,
        );
    }
}
