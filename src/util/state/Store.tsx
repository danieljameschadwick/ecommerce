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
    stateReconciler: autoMergeLevel1,
    debug: true,
};

const Reducer = combineReducers({
    // basket: BasketReducer,
    basket: persistReducer(basketPersistConfig, BasketReducer)
});

const persistedReducer = persistReducer(persistConfig, BasketReducer);

const Store = createStore(persistedReducer);

// todo: refactor to redux-persist
Store.subscribe(() => {
    if (Store === undefined) {
        return;
    }

    const basket: Basket = Store.getState().basket;
    const tempBasket: Basket = new Basket();

    const products = [];

    for (const index in basket.products) {
        const product = basket.products[index];

        for (const index in product) {
            products.push(product[index]);
        }
    }

    tempBasket.products = products;
    localStorage.setItem("testState", JSON.stringify(tempBasket))
});

const Persistor = persistStore(Store);

export {
    Store,
    Persistor,
};

window.store = Store; // todo: remove debug