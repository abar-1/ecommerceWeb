"use client";
import cartItem from '@/components/cartItem/cartItem.component';
import { createContext, useState, useCallback } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 }
     : cartItem)
    }
    return [...cartItems, {...productToAdd, quantity: 1 }];
}

const updateCartItemQuantity = (cartItems, itemId, newQuantity) => {
    if (newQuantity <= 0) {
        return cartItems.filter(item => item.id !== itemId);
    }
    return cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
}

const calculateCartCount = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    cartCount: 0,
    addItemToCart: () => {},
    updateItemQuantity: () => {},
    removeItemFromCart: () => {},
    clearCart: () => {}
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = useCallback((productToAdd) => {
        setCartItems(prevItems => {
            const newItems = addCartItem(prevItems, productToAdd);
            setCartCount(calculateCartCount(newItems));
            return newItems;
        });
    }, []);

    const updateItemQuantity = useCallback((itemId, newQuantity) => {
        setCartItems(prevItems => {
            const newItems = updateCartItemQuantity(prevItems, itemId, newQuantity);
            setCartCount(calculateCartCount(newItems));
            return newItems;
        });
    }, []);

    const removeItemFromCart = useCallback((itemId) => {
        setCartItems(prevItems => {
            const newItems = prevItems.filter(item => item.id !== itemId);
            setCartCount(calculateCartCount(newItems));
            return newItems;
        });
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
        setCartCount(0);
    }, []);

    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        cartCount, 
        updateItemQuantity,
        removeItemFromCart,
        clearCart
    };

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}