import * as Yup from "yup";
import { Button } from "../util/buttons/Button";
import { FormGroup } from "../util/form/FormGroup";

export const AddressDetailsSchema = Yup.object().shape({
    property: Yup.string().required("Required"),
    addressLine1: Yup.string().required("Required"),
    addressLine2: Yup.string().required("Required"),
    county: Yup.string().required("Required"),
    postCode: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
});

export const ADDRESS_TYPE = {
    "SHIPPING": "SHIPPING",
    "INVOICE": "INVOICE"
};

const ADDRESS_HEADER = {
    [ADDRESS_TYPE.SHIPPING]: "Shipping",
    [ADDRESS_TYPE.INVOICE]: "Invoice"
};

interface IProps {
    handle: string;
};

export const AddressDetails: React.FC = ({ handle }): IProps => {
    if (undefined === ADDRESS_TYPE[handle]) {
        throw new Error(`Invalid Address Type [${handle}].`);
    }

    const heading = ADDRESS_HEADER[handle];

    return (
        <>
            <h2 className={"mb-3"}>
                {heading} address
            </h2>

            <FormGroup
                name={"property"}
                label={"Property/house number"}
                placeholder={"House/flat number"}
            />

            <FormGroup
                name={"addressLine1"}
                label={"Address Line 1"}
                placeholder={"Street/road"}
            />

            <FormGroup
                name={"addressLine2"}
                label={"Address Line 2"}
                required={false}
            />

            <FormGroup
                name={"county"}
                label={"County"}
            />

            <div className={"form-row grid grid-cols-3 gap-x-4"}>
                <FormGroup
                    name={"country"}
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
                    name={"postCode"}
                    label={"Post code"}
                />

                <Button text={"Find Address"} />
            </div>
        </>
    );
};
