import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SubmitButton } from "../util/buttons/SubmitButton";
import { ContactDetails } from "./ContactDetails";
import { ADDRESS_TYPE, AddressDetails } from "./AddressDetails";
import { PaymentDetails } from "./PaymentDetails";

const CheckoutSchema = Yup.object().shape({
    contactDetails: Yup.object().required().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
    }),
    shippingAddress: Yup.object().required().shape({
        property: Yup.string().required("Required"),
        addressLine1: Yup.string().required("Required"),
        addressLine2: Yup.string().optional(),
        county: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        postCode: Yup.string().required("Required"),
    }),
    invoiceAddress: Yup.object().optional().shape({
        property: Yup.string().required("Required"),
        addressLine1: Yup.string().required("Required"),
        addressLine2: Yup.string().optional(),
        county: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        postCode: Yup.string().required("Required"),
    }),
});

interface IProps {
    className?: string;
};

export const Checkout: React.FC = ({ className = undefined }: IProps) => {
    const [ invoiceAddress, setInvoiceAddress ] = useState<boolean>(false);

    const updateInvoiceAddress = (value: boolean): void => {
        if (!value) {
            // update invoice address to undefined
            console.log("reset invoice");
        }

        setInvoiceAddress(value);
    };

    return (
        <div className={`flex flex-col text-white-base ${className}`}>
            <h1 className={"mb-2"}>
                Checkout
            </h1>

            <Formik
                initialValues={{
                    contactDetails: {
                        firstName: "",
                        lastName: "",
                        email: "",
                    },
                    shippingAddress: {
                        property: "",
                        addressLine1: "",
                        addressLine2: "",
                        country: "United Kingdom",
                        postCode: "",
                        county: "",
                    },
                    invoiceAddress: {
                        property: "",
                        addressLine1: "",
                        addressLine2: "",
                        country: "United Kingdom",
                        postCode: "",
                        county: "",
                    },
                }}
                validationSchema={CheckoutSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {(formik, handleSubmit, errors) => (
                    <Form>
                        <div>{undefined !== errors ? errors.map(error => {
                            return (
                                <div>
                                    {error}
                                </div>
                            )
                        }): ''}</div>

                        <ContactDetails />

                        <div className={"flex"}>
                            <div className={invoiceAddress ? "w-1/2 mr-2" : "w-full"}>
                                <AddressDetails
                                    handle={ADDRESS_TYPE.SHIPPING}
                                    slim={invoiceAddress}
                                />
                            </div>

                            {invoiceAddress ? (
                                <div className={"w-1/2 ml-2"}>
                                    <AddressDetails handle={ADDRESS_TYPE.INVOICE} slim={true} />
                                </div>
                            ) : ""}
                        </div>

                        {!invoiceAddress ? (
                            <div className={"mb-4 text-xs"} onClick={() => updateInvoiceAddress(true)}>
                                <span className={"link link--primary hover"}>Enter separate invoice address</span>
                            </div>
                        ) : (
                            <div className={"mb-4 text-xs"} onClick={() => updateInvoiceAddress(false)}>
                                <span className={"link link--primary hover"}>Make shipping and invoice identical</span>
                            </div>
                        )}

                        <PaymentDetails />

                        <SubmitButton text={"Next"} onClick={() => handleSubmit} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};
