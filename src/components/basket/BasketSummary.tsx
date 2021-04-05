import { Basket } from "../../util/state/Basket";

interface IProps {
    basket: Basket;
    className: string;
};

export const BasketSummary: React.FC = ({basket, additionalClassName}: IProps) => {
    return (
        <div className={`ml-5 ${additionalClassName ?? ''}`}>
            Total: {basket.getTotal()}
        </div>
    );
};
