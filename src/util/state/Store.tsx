import { createStore } from "redux";
import { Reducer } from "./Reducer";

export const Store = createStore(Reducer);

window.store = Store; // todo: remove debug