import { Basket } from "../../util/state/Basket";
import { SubmitButton } from "../util/buttons/SubmitButton";
import { ContactDetails } from "./ContactDetails";
import { ShippingDetails } from "./ShippingDetails";

interface IProps {
    basket: Basket;
    className?: string;
};

export const Checkout: React.FC = ({ basket, className = "" }: IProps) => {
    return (
        <div className={`flex flex-col text-white-base ${className}`}>
            <h1 className={"mb-2"}>
                Checkout
            </h1>

            <ContactDetails />

            <ShippingDetails />

            <SubmitButton text={"Next"} />
        </div>
    );
};
