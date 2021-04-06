import { useSelector } from "react-redux";
import { formatCurrency } from "../../util/formatting/CurrencyFormatter";

export const Checkout: React.FC = () => {
    const basket: PersistedBasket = useSelector(state => state.basket.basket);

    if (undefined === basket) {
        return (
            <div>
                No basket?
            </div>
        );
    }

    return (
        <div className={"flex flex-wrap text-white-base"}>
            <div className={"w-full"}>{formatCurrency(basket.getSubTotal())}</div>
            <div className={"w-full"}>{formatCurrency(basket.getDeliveryTotal())}</div>
            <div className={"w-full"}>{formatCurrency(basket.getTotal())}</div>
        </div>
    );
};
