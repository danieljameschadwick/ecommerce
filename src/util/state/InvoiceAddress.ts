import { AddressType } from "../../components/checkout/AddressDetails";
import { Address } from "./Address";

export class InvoiceAddress extends Address {
    type: AddressType = AddressType.INVOICE;

    update(property?: string, addressLine1?: string, addressLine2?: string, county?: string, country?: string, postCode?: string): void {
        this.property = property;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.county = county;
        this.country = country;
        this.postCode = postCode;
    }

    updateFromDTO({ property, addressLine1, addressLine2, county, country, postCode }: InvoiceAddress): void {
        this.update(
            property,
            addressLine1,
            addressLine2,
            county,
            country,
            postCode
        );
    }
}
