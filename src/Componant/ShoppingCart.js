import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ShoppingCart = () => {
    const { items, removeItem } = useContext(CartContext);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
