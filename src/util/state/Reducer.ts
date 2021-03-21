import { Product } from "./Basket";

export const ACTION = {
    ADD_TO_CART: 'app.update.user',
};

export const Reducer = (state, action) => {
    switch (action.type) {
        case ACTION.ADD_TO_CART:
            const { payload } = action;
            const { id, size, quantity } = payload;
            const { basket } = state;

            const product = new Product(id, size, quantity);
            basket.addProduct(product);

            return {
                ...state,
                basket
            };

        default:
            return state;
    }
};