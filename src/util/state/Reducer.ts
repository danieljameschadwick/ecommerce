import { Product } from "./Product";
import { Basket } from "./Basket";
import { ACTION } from "./Action";

const initialState = {
  basket: new Basket(), 
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_TO_CART:
            const { payload } = action;
            const { id, size, quantity } = payload;
            const { basket } = state;

            const product = new Product(id, size, quantity);
            basket.addProduct(product);

            break;

        case ACTION.SAVE_TO_STORAGE:
            console.log('persist');
            
            break;
    }

  return state;
};

export const OldReducer = (state, action) => {
    
};