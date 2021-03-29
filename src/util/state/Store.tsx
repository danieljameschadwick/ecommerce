import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { basketPersistConfig, BasketReducer } from "./BasketReducer";
import BasketTransform from "./BasketTransform";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import hardSet from "redux-persist/lib/stateReconciler/hardSet"
import { Basket } from "./Basket";

const persistConfig = {
    key: "root",
    storage: storage,
    transforms: [BasketTransform],
    // stateReconciler: autoMergeLevel1,
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