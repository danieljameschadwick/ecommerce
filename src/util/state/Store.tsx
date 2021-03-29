import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
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

const persistedReducer = persistReducer(persistConfig, Reducer);
const Store = createStore(persistedReducer);
const Persistor = persistStore(Store);

export {
    Store,
    Persistor,
};

window.store = Store; // todo: remove debug