import { AddressType } from "../../components/checkout/AddressDetails";

export abstract class Address {
    property?: string;
    addressLine1?: string;
    addressLine2?: string;
    county?: string;
    country?: string;
    postCode?: string;
    type?: AddressType;
}
