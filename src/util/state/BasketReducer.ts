import storage from 'redux-persist/lib/storage';
import { persistReducer, REHYDRATE } from 'redux-persist';
import { Product } from "./Product";
import { Attribute, AttributeDTO } from "./Attribute";
import { Basket } from "./Basket";
import { ACTION } from "./Action";

const initialState = {
    basket: new Basket(), 
};

interface AddToCartDTO {
    id: number;
    quantity: number;
    attributes: AttributeHash[];
};

interface AttributeHash {
    [size: string]: AttributeDTO;
}

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            return {
              ...state,
              basket: new Basket(action.payload.basket.products),
        };

        case ACTION.ADD_TO_CART:
            const { id, quantity, attributes }: AddToCartDTO = action.payload;
            const { basket } = state;
            const attributeDTOs: AttributeDTO[] = [];

            for (const [attribute] of Object.entries(attributes)) {
                attributeDTOs.push(
                    new Attribute(attribute.id, attribute.type, attribute.handle)
                );
            }

            const product = new Product(id, quantity, attributeDTOs);
            basket.addProduct(product);

            break;

        case ACTION.SAVE_TO_STORAGE:
            console.log('persist');
            
            break;
    }

    return state;
};

const persistConfig = {
    key: 'basket',
    storage: storage,
};

export default persistReducer(persistConfig, BasketReducer);
