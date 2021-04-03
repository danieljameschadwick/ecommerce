import { REHYDRATE } from "redux-persist";
import { Product } from "./Product";
import { Attribute, AttributeDTO } from "./Attribute";
import { Basket } from "./Basket";
import { LocalBasket } from "./LocalBasket";
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
};

export const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            let localBasket: LocalBasket = action.payload?.basket;
            let hydratedBasket = new Basket();

            if (
                undefined === localBasket
                || !localBasket instanceof LocalBasket
                || undefined === localBasket.products
            ) {
                return {
                    ...state,
                    basket: hydratedBasket,
                }
            }

            // todo: no unused vars on key
            // eslint-disable-next-line
            for (const [key, productData] of Object.entries(localBasket.products)) {
                let { id, price, quantity, attributes } = productData;
                let product = new Product(id, price, quantity, attributes);

                hydratedBasket.addProduct(product);
            }

            return {
                ...state,
                basket: hydratedBasket,
            };

        case ACTION.ADD_TO_CART:
            let { id, price, quantity, attributes }: AddToCartDTO = action.payload;
            let { basket } = state;
            let attributeDTOs: AttributeDTO[] = [];

            // todo: no unused vars on key
            // eslint-disable-next-line
            for (const [key, attribute] of Object.entries(attributes)) {
                attributeDTOs.push(
                    new Attribute(attribute.id, attribute.type, attribute.handle)
                );
            }

            const product = new Product(id, price, quantity, attributeDTOs);
            basket.addProduct(product);

            return {
                ...state,
                basket,
            };
    }

    return state;
};
