import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to={"/"}>
      <Logo className="logo"></Logo>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to={"/shop"}>SHOP</OptionLink>
      <OptionLink to={"/thispagethrowsanerror"}>CONTACT</OptionLink>
      {currentUser ? (
        // <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        // or
        <OptionLink as={"div"} onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to={"/signin"}>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>

    {!hidden && <CartDropdownContainer />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
