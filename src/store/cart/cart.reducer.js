import { CART_ACTION_TYPES } from "./cart.types";
import { addCartItem, updateCartItemQuantity, calculateCartCount} from './cart.action';

export const CART_INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    isCartOpen: false
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return { ...state, isCartOpen: payload };
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      const newCartItems = addCartItem(state.cartItems, payload);
      return {
        ...state,
        cartItems: newCartItems,
        cartCount: calculateCartCount(newCartItems)
      };
    case CART_ACTION_TYPES.UPDATE_ITEM_QUANTITY:
      const updatedCartItems = updateCartItemQuantity(state.cartItems, payload.itemId, payload.newQuantity);
      return {
        ...state,
        cartItems: updatedCartItems,
        cartCount: calculateCartCount(updatedCartItems)
      };
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      const filteredCartItems = state.cartItems.filter(item => item.id !== payload);
      return {
        ...state,
        cartItems: filteredCartItems,
        cartCount: calculateCartCount(filteredCartItems)
      };
    case CART_ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        cartCount: 0
      };
    default:
      return state;
  }
};