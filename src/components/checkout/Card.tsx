import { Field } from "formik";

export const Card: React.FC = () => {
    const withNamespace = (fieldName: string) => { // todo: move to a NestedType (?)
        return `paymentDetails.creditCard.${fieldName}`;
    };

    return (
        <div className="flex flex-wrap sm:flex-nowrap">
            <Field
                name={withNamespace("cardNumber")}
                type={"input"}
                className={"w-full sm:w-5/6 sm:flex-1 text-sm text-black-base rounded sm:rounded-l sm:rounded-none p-3 focus:outline-none mb-2 sm:mb-0"}
                placeholder={"Card Number"}
            />

            <Field
                name={withNamespace("expiryDate")}
                type={"input"}
                className="w-1/3 sm:w-1/6 text-sm text-black-base rounded-l sm:rounded-none p-3 focus:outline-none"
                placeholder={"MM / YY"}
            />

            <Field
                name={withNamespace("securityCode")}
                type={"input"}
                className={"w-1/3 sm:w-1/6 text-sm text-black-base rounded-r p-3 focus:outline-none"}
                placeholder={"CVC"}
            />
        </div>
    );
};