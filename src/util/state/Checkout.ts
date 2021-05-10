import { ContactDetails } from "./ContactDetails";
import { Payment } from "./Payment";
import { ShippingAddress } from "./ShippingAddress";
import { InvoiceAddress } from "./InvoiceAddress";

export class Checkout {
    contactDetails: ContactDetails;
    shippingAddress: ShippingAddress;
    invoiceAddress?: InvoiceAddress;
    payment: Payment;

    constructor() {
        this.contactDetails = new ContactDetails();
        this.shippingAddress = new ShippingAddress();
        this.invoiceAddress = new InvoiceAddress();
        this.payment = new Payment();
    }

    update(contactDetails: ContactDetails, shippingAddress: ShippingAddress, payment: Payment, invoiceAddress?: InvoiceAddress) {
        this.contactDetails.updateFromDTO(contactDetails);
        this.shippingAddress.updateFromDTO(shippingAddress);
        this.payment.updateFromDTO(payment);

        if (undefined !== this.invoiceAddress && undefined !== invoiceAddress) {
            this.invoiceAddress.updateFromDTO(invoiceAddress);
        }
    }
}
