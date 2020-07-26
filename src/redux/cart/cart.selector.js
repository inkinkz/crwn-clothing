import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
    0
  )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
