import storage from "redux-persist/lib/storage";
import { persistReducer, REHYDRATE } from "redux-persist";
import { Product } from "./Product";
import { Attribute, AttributeDTO } from "./Attribute";
import { Basket } from "./Basket";
import { ACTION } from "./Action";
import BasketTransform from "./BasketTransform";

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

export const BasketReducer = (state = initialState, action) => {
    console.log(action.type);
    console.log(state.basket);

    switch (action.type) {
        case REHYDRATE:
            const rehydrateProducts = action.payload?.basket?.products ?? [];

            console.log(rehydrateProducts);

            return {
                ...state,
                basket: new Basket(rehydrateProducts),
            };

        case ACTION.ADD_TO_CART:
            const { id, quantity, attributes }: AddToCartDTO = action.payload;
            const { basket } = state;
            const attributeDTOs: AttributeDTO[] = [];

            for (const [key, attribute] of Object.entries(attributes)) {
                attributeDTOs.push(
                    new Attribute(attribute.id, attribute.type, attribute.handle)
                );
            }

            const product = new Product(id, quantity, attributeDTOs);
            basket.addProduct(product);

            return {
                ...state,
                basket,
            };

        case ACTION.SAVE_TO_STORAGE:
            console.log("persist");
            
            break;
    }

    return state;
};

export const basketPersistConfig = {
    key: "basket",
    storage: storage,
    transforms: [BasketTransform],
};

// export default persistReducer(basketPersistConfig, BasketReducer);
