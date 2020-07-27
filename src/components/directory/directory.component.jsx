import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSections }) => (
      <MenuItem key={id} {...otherSections}></MenuItem>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
