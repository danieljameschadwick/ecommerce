import { formatCurrency } from "../../util/formatting/CurrencyFormatter";
import { Basket } from "../../util/state/Basket";

interface IProps {
    basket: Basket;
    className?: string;
};

export const Checkout: React.FC = ({ basket, className = "" }: IProps) => {
    return (
        <div className={`flex flex-wrap text-white-base ${className}`}>
            <div className={"w-full"}>{formatCurrency(basket.getSubTotal())}</div>
            <div className={"w-full"}>{formatCurrency(basket.getDeliveryTotal())}</div>
            <div className={"w-full"}>{formatCurrency(basket.getTotal())}</div>
        </div>
    );
};
