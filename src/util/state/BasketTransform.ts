import { createTransform } from "redux-persist";
import { Basket } from "./Basket";

interface BasketState {
    basket: Basket;
}

const BasketTransform = createTransform(
    // transform state on its way to being serialized and persisted.
    (inboundState: BasketState, key) => {
        console.log(inboundState);

        const { basket } = inboundState;

        if (basket === undefined) {
            return {
                ...inboundState
            };
        }

        console.log(basket);

        return {
            ...inboundState,
            basket: {
                products: basket.products.map(product => {
                    return {
                        ...product
                    }
                })
            }
        };
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