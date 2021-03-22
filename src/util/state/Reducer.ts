import { Product } from "./Product";
import { Attribute } from "./Attribute";
import { Basket } from "./Basket";
import { ACTION } from "./Action";

const initialState = {
    basket: new Basket(), 
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_TO_CART:
            const { payload: { id, quantity, attributes: { size } } } = action;
            const { basket } = state;
            const attributes = [];

            attributes.push(new Attribute(size.id, size.type, size.handle));
            const product = new Product(id, quantity, [size]);
            basket.addProduct(product);

            break;

        case ACTION.SAVE_TO_STORAGE:
            console.log('persist');
            
            break;
    }

  return state;
};
