import { useSelector } from "react-redux";

export const Basket: React.FC = () => {
    const basket = useSelector(state => state.basket);

    return (
        <div>
            <h1>Basket</h1>
        </div>
    )
};