"use client";
import cartItem from '@/components/cartItem/cartItem.component';
import { createContext, useCallback, useReducer } from 'react';

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

const INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    isCartOpen: false
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'SET_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload
            };
        case 'ADD_ITEM_TO_CART':
            const newCartItems = addCartItem(state.cartItems, payload);
            return {
                ...state,
                cartItems: newCartItems,
                cartCount: calculateCartCount(newCartItems)
            };
        case 'UPDATE_ITEM_QUANTITY':
            const updatedCartItems = updateCartItemQuantity(state.cartItems, payload.itemId, payload.newQuantity);
            return {
                ...state,
                cartItems: updatedCartItems,
                cartCount: calculateCartCount(updatedCartItems)
            };
        case 'REMOVE_ITEM_FROM_CART':
            const filteredCartItems = state.cartItems.filter(item => item.id !== payload);
            return {
                ...state,
                cartItems: filteredCartItems,
                cartCount: calculateCartCount(filteredCartItems)
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
                cartCount: 0
            };
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`);
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { cartItems, cartCount, isCartOpen } = state;

    const setIsCartOpen = useCallback((isOpen) => {
        dispatch({ type: 'SET_CART_OPEN', payload: isOpen });
    }, []);

    const addItemToCart = useCallback((productToAdd) => {
        dispatch({ type: 'ADD_ITEM_TO_CART', payload: productToAdd });
    }, []);

    const updateItemQuantity = useCallback((itemId, newQuantity) => {
        dispatch({ type: 'UPDATE_ITEM_QUANTITY', payload: { itemId, newQuantity } });
    }, []);

    const removeItemFromCart = useCallback((itemId) => {
        dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: itemId });
    }, []);

    const clearCart = useCallback(() => {
        dispatch({ type: 'CLEAR_CART' });
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