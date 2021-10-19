import React, { Component } from "react";
import "./EquipmentBodyBox.scss";

class EquipmentBodyBox extends Component {
  render() {
    const { img, title, description, latest, onClick } = this.props;
    return (
      <div className="EquipmentBodyBox-container">
        <div onClick={onClick} target="">
          <div>
            <div style={latest ? { backgroundColor: "rgb(68, 68, 68)" } : {}}>
              {latest ? "NEW" : ""}
            </div>
            <img src={img} alt={"img"}></img>
          </div>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    );
  }
}

export default EquipmentBodyBox;
