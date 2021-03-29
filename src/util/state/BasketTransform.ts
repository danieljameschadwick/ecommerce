import { createTransform } from "redux-persist";
import { Basket } from "./Basket";

interface BasketState {
    basket: Basket;
}

const BasketTransform = createTransform(
    // transform state on its way to being serialized and persisted.
    (inboundState: BasketState, key) => {
        const { basket } = inboundState;

        console.log('persisting state');
        console.log(basket);

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

        return new Basket(serializedProduct);
    },
    // transform state being rehydrated
    (outboundState, key) => {
        console.log(outboundState);

        return {
            ...outboundState
        };
    },
);

export default BasketTransform;