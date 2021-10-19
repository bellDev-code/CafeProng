import React, { Component } from "react";
import "./MoreView.scss";
import { NavLink } from "react-router-dom";

class MoreView extends Component {
  render() {
    return (
      <div className="MoreViewBttnContainer">
        <NavLink to="/ingredients">목록으로</NavLink>
      </div>
    );
  }
}

export default MoreView;
