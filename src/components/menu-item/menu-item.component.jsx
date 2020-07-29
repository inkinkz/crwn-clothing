import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  ContentContainer,
  BackgroundImageContainer,
  ContentSubtitle,
  ContentTitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />

    <ContentContainer>
      <ContentTitle className="content">{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
