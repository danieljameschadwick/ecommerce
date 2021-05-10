import { REHYDRATE } from "redux-persist";
import { ACTION } from "./Action";
import { Checkout } from "./Checkout";

const initialState = {
    checkout: new Checkout(),
};

export const CheckoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            return {
                ...state,
                basket: action.payload?.checkout,
            };

        case ACTION.UPDATE_DETAILS:
            return {
                ...state,
                checkout: updateDetails(action.payload, state),
            };
    }

    return state;
};

const updateDetails = (payload: any, state: { checkout: Checkout; }): Checkout => {
    const { contactDetails, shippingAddress, paymentDetails } = payload;
    const { checkout } = state;

    checkout.update(
        contactDetails,
        shippingAddress,
        paymentDetails
    );

    return checkout;
};
