import { createContext, useReducer } from "react";
import { Reducer } from './Reducer'
import { Basket } from './Basket';

// todo: resole typing for state/dispatch
const initialState = {
    basket: new Basket(),
};

export const StateContext = createContext(initialState);
export const DispatchContext = createContext(initialState);

export const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};