import { useSelector } from "react-redux";
import { Basket as PersistedBasket } from "../../util/state/Basket";

export const Basket: React.FC = () => {
    const basket: PersistedBasket = useSelector(state => state.basket.basket);

    if (undefined === basket) {
        return (
            <div>No basket???</div>
        );
    }

    const products: Product[] = [];

    // todo: add unhashed getProducts to Basket
    for (const keyMap in basket.products) {
        const productMap = basket.products[keyMap]

        for (const key in productMap) {
            const product = productMap[key];

            products.push(product);
        }
    }

    return (
        <div>
            <h1>Basket</h1>

            {products.map(product => {
                return (
                    <div key={product.getSku()} className={"text-white-base"}>
                        {product.getSku()}, {product.quantity}
                    </div>
                );
            })}
        </div>
    )
};
