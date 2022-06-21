import React, { createContext, useContext, useState } from 'react';

const StatContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    return (
        <StatContext.Provider
            value={{ activeMenu, setActiveMenu }}>
            {children}
        </StatContext.Provider>
    );
};

export const useStateContext = () => useContext(StatContext);