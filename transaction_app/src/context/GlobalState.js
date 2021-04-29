import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        { id: 1, text: 'Microwave', type: 'Credit', amount: 120 },
        { id: 2, text: 'Pan', type: 'Credit', amount: 35 },
        { id: 3, text: 'Plates', type: 'Debit', amount: 22 },
        { id: 4, text: 'Silverware', type: 'Credit', amount: 40 },
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}