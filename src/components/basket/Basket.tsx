import { useSelector } from "react-redux";
import { Basket as PersistedBasket } from "../../util/state/Basket";
import { BasketItem } from "./BasketItem";
import { BasketSummary } from "./BasketSummary";
import { Product } from "../../util/state/Product";

export const Basket: React.FC = () => {
    const basket: PersistedBasket = useSelector(state => state.basket.basket);

    if (undefined === basket) {
        return (
            <div>
                No basket?
            </div>
        );
    }

    const products: Product[] = [];

    // todo: add unhashed getProducts to Basket
    for (const keyMap in basket.products) {
        const productMap = basket.products[keyMap];

        for (const key in productMap) {
            const product = productMap[key];

            products.push(product);
        }
    }

    return (
        <div className={"basket--container"}>
            <div className={"basket"}>
                <h1 className={"mb-3"}>
                    Basket
                </h1>

                {products.map(product => {
                    return (
                        <BasketItem
                            key={product.getSku()}
                            product={product}
                        />
                    );
                })}
            </div>

            <div className={"summary--container"}>
                <BasketSummary basket={basket} />
            </div>
        </div>
    );
};
