import { createTransform } from "redux-persist";
import { Basket } from "./Basket";

interface BasketState {
    basket: Basket;
}

const BasketTransform = createTransform(
    (inboundState: BasketState, key) => {
        const { basket } = inboundState;

        if (basket === undefined) {
            return {
                ...inboundState
            };
        }

        const serializedProduct = [];

        for (const keyMap in basket.products) {
            const productMap = basket.products[keyMap]

            for (const key in productMap) {
                const product = productMap[key];

                serializedProduct.push(product);
            }
        }

        return {
            ...inboundState,
            basket: new Basket(serializedProduct),
        };
    },
    (outboundState, key) => {
        console.log(outboundState);

        return {
            ...outboundState
        };
    },
);

export default BasketTransform;