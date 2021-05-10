import { createStore, combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";
import { CheckoutReducer } from "./CheckoutReducer";

const persistConfig = {
    key: "checkout",
    storage: storage,
};

const Reducer = combineReducers({
    checkout: CheckoutReducer,
});

const CheckoutStore = () => {
    if (typeof window === "undefined") {
        return createStore(Reducer);
    }

    const { persistStore, persistReducer } = require("redux-persist");
    const persistedReducer = persistReducer(persistConfig, Reducer);

    const store = createStore(persistedReducer);

    store.__persistor = persistStore(store);

    return store;
};

const Wrapper = createWrapper(CheckoutStore);

export {
    Wrapper,
    CheckoutStore,
};
