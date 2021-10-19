import React from "react";
import plusIcon from "../../../_asset/images/main/plus-icon-copy-2.png";
import "./Line.scss";
const Line = () => {
  return (
    <div className="Line_container">
      <div className="Line_Title">Prong Curriculum</div>
      <div className="Line_Wrap">
        <div className="Line_text">Counseling Request</div>
        <div className="Line_Icon">
          <img src={plusIcon} alt="화살표 아이콘"></img>
        </div>
      </div>
    </div>
  );
};

export default Line;
