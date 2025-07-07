import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from '@/utils/reducer/reducer.utils';

export const setIsCartOpen = (isOpen) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, isOpen);

export const addItemToCart = (productToAdd) =>
  createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, productToAdd);

export const updateItemQuantity = (itemId, newQuantity) =>
  createAction(CART_ACTION_TYPES.UPDATE_ITEM_QUANTITY, { itemId, newQuantity });

export const removeItemFromCart = (itemId) =>
  createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, itemId);

export const clearCart = () =>
  createAction(CART_ACTION_TYPES.CLEAR_CART);

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 }
     : cartItem)
    }
    return [...cartItems, {...productToAdd, quantity: 1 }];
}

export const updateCartItemQuantity = (cartItems, itemId, newQuantity) => {``
    if (newQuantity <= 0) {
        return cartItems.filter(item => item.id !== itemId);
    }
    return cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
}

export const calculateCartCount = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
}
