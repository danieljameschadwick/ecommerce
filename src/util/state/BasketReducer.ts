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
    price: number;
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

            if (
                undefined !== localBasket.delivery
            ) {

                hydratedBasket.updateDelivery(localBasket.delivery);
            }

            return {
                ...state,
                basket: hydratedBasket,
            };

        case ACTION.ADD_TO_CART:
            console.log(ACTION.ADD_TO_CART);

            return {
                ...state,
                basket: addToCart(action.payload, state),
            };
        
        case ACTION.DECREMENT_PRODUCT:
            console.log(ACTION.REMOVE_FROM_CART);

            return {
                ...state,
                basket: decrementProduct(action.payload, state),
            };

        case ACTION.REMOVE_FROM_CART:
            console.log(ACTION.REMOVE_FROM_CART);

            return {
                ...state,
                basket: removeProduct(action.payload, state),
            };
        
        case ACTION.UPDATE_DELIVERY:
            let updatedBasket = state.basket;

            let delivery: AttributeDTO = action.payload;
            updatedBasket.updateDelivery(delivery);

            return {
                ...state,
                basket: updatedBasket
            };
    }

    return state;
};

const addToCart = (payload: any, state: { basket: Basket; }): Basket => {
    const { id, price, quantity, attributes }: AddToCartDTO = payload;
    const { basket } = state;
    const attributeDTOs: AttributeDTO[] = [];

    // todo: no unused vars on key
    // eslint-disable-next-line
    for (const [key, attribute] of Object.entries(attributes)) {
        attributeDTOs.push(
            new Attribute(attribute.id, attribute.handle, attribute.value, attribute.name)
        );
    }

    const product = new Product(id, price, quantity, attributeDTOs);
    basket.addProduct(product);

    return basket;
};

const decrementProduct = (payload: any, state: { basket: Basket; }): Basket => {
    const { sku } = payload;
    const { basket } = state;
    
    basket.decrementProduct(sku);

    return basket;
};

const removeProduct = (payload: any, state: { basket: Basket; }): Basket => {
    const { id, sku } = payload;
    const { basket } = state;

    basket.removeProduct(sku);

    return basket;
};
