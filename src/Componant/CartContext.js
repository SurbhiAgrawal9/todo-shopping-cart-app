import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (name, price) => {
        const newItem = {
            id: Math.random().toString(),
            name: name,
            price: price,
        };
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const removeItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
