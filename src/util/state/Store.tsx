import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper } from 'next-redux-wrapper';
import { BasketReducer } from "./BasketReducer";
import BasketTransform from "./BasketTransform";

const persistConfig = {
    key: "root",
    storage: storage,
    transforms: [BasketTransform],
};

const Reducer = combineReducers({
    basket: BasketReducer,
});

const makeStore = ({ isServer }) => {
    if (isServer) {
        return createStore(Reducer);
    }

    const { persistStore, persistReducer } = require("redux-persist");
    const persistedReducer = persistReducer(persistConfig, Reducer);

    const store = createStore(
        persistedReducer,
    );

    store.__persistor = persistStore(store);

    return store;
};

const Wrapper = createWrapper(makeStore);

export {
    Wrapper,
};
