import * as Yup from "yup";
import { Button } from "../util/buttons/Button";
import { FormGroup } from "../util/form/FormGroup";

export const ADDRESS_TYPE = {
    "SHIPPING": "SHIPPING",
    "INVOICE": "INVOICE"
};

const ADDRESS_HEADER = {
    [ADDRESS_TYPE.SHIPPING]: "Shipping",
    [ADDRESS_TYPE.INVOICE]: "Invoice",
};

const ADDRESS_FORM = {
    [ADDRESS_TYPE.SHIPPING]: "shippingAddress",
    [ADDRESS_TYPE.INVOICE]: "invoiceAddress",
};

interface IProps {
    handle: string;
    slim: boolean;
};

export const AddressDetails: React.FC = ({ handle, slim = false }: IProps) => {
    if (undefined === ADDRESS_TYPE[handle]) {
        throw new Error(`Invalid Address Type [${handle}].`);
    }

    const heading = ADDRESS_HEADER[handle];

    const withNamespace = (fieldName: string) => { // todo: move to a NestedType (?)
        return ADDRESS_FORM[handle] ? `${ADDRESS_FORM[handle]}.${fieldName}` : fieldName;
    };

    return (
        <>
            <h2 className={"mb-3"}>
                {heading} address
            </h2>

            <FormGroup
                name={withNamespace("property")}
                label={"Property/house number"}
                placeholder={"House/flat number"}
            />

            <FormGroup
                name={withNamespace("addressLine1")}
                label={"Address Line 1"}
                placeholder={"Street/road"}
            />

            <FormGroup
                name={withNamespace("addressLine2")}
                label={"Address Line 2"}
                required={false}
            />

            <FormGroup
                name={withNamespace("county")}
                label={"County"}
            />

            <div className={`form-row collapsible-row ${slim ? "slim" : ""}`}>
                <FormGroup
                    name={withNamespace("country")}
                    label={"Country"}
                    input={"select"}
                    children={
                        <>
                            <option value={"GB"}>United Kingdom</option>
                            <option value={"IRE"}>Ireland</option>
                        </>
                    }
                />

                <FormGroup
                    name={withNamespace("postCode")}
                    label={"Post code"}
                />

                <Button text={"Find Address"} additionalClassname={"text-sm sm:col-span-3"} />
            </div>
        </>
    );
};
