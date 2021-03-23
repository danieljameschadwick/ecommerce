import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import BasketReducer from "./BasketReducer";

const persistConfig = {
    key: "root",
    storage: storage,
};

const rootReducer = combineReducers({
    basket: BasketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = createStore(persistedReducer);
export const Persistor = persistStore(Store);

window.store = Store; // todo: remove debug