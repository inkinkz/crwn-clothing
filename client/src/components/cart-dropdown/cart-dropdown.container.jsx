import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CartDropdown from "./cart-dropdown.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropdownContainer = compose(connect(mapStateToProps))(CartDropdown);

export default CartDropdownContainer;
