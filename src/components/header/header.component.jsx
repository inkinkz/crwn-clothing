import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  // OptionDiv,
} from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to={"/"}>
      <Logo className="logo"></Logo>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to={"/shop"}>SHOP</OptionLink>
      <OptionLink to={"/shop"}>CONTACT</OptionLink>
      {currentUser ? (
        // <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        // or
        <OptionLink as={"div"} onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to={"/signin"}>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>

    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
