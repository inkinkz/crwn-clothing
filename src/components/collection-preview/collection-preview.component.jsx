import React from "react";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collections-preview.styles";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer to={`/shop/${title.toLowerCase()}`}>
        <h1>{title.toUpperCase()}</h1>
      </TitleContainer>
      <PreviewContainer>
        {items.map(
          (item, index) =>
            index < 4 && <CollectionItem key={item.id} item={item} />
        )}

        {/* OR */}

        {/* {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <div key={item.id}> {item.name}</div>
          ))} */}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
