import { createContext, useReducer } from "react";
import { Reducer } from './Reducer'
import { Basket } from './Basket';

// todo: resole typing for state/dispatch
const initialState = {
    basket: new Basket(),
};

export const Context = createContext(initialState);

export const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};