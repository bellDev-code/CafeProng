import React, { Component } from "react";
import "./Footer.scss";
import footerlogo from "../../_asset/images/common/logo-icon.svg";
import { NavLink } from "react-router-dom";
import { RoutesString } from '../../constants/routesString'
class Footer extends Component {

  renderSection1 = () => {
    return (
      <div className="FirstSection">
        <div className="FirstSectionTopBox">
          <div className="logoimgbox">
            <img src={footerlogo} alt="footerlogo" />
          </div>

          <div className="SnsLinks">
            <a href="#" target="_blank">
              <div>Facebook</div>
            </a>
            <a href="#" target="_blank">
              <div>Youtube</div>
            </a>
            <a
              href="http://www.instagram.com/prong_specialty_coffee"
              target="_blank"
            >
              <div>Instagram</div>
            </a>
          </div>
        </div>
        <div className="FirstSectionBottomBox">
          <div>2020 ⓒ All rights reserved</div>
        </div>
      </div>
    );
  }

  renderSection2 = () => {
    return (
      <div className="SecondSection">
        <div className="SecondSectionTopBox">
          <div className="InfoTop_tell_TextBox">
            T. 02-2231-4574<br></br>
            E. prong@gmail.com
          </div>
          <div className="InfoTop_adrees_TextBox">
            04570<br />
            <div className="Mobile">
              2F 66, Majang-ro, <br />
              Jung-gu, Seoul,<br />
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSection3 = () => {
    return (
      <div className="ThirdSection">
        <div className="ThirdSectionTopBox">
          <div className="InfoTopTextBox">
            <NavLink exact={true} className="item" to={RoutesString.Home}>
              Home
            </NavLink>
            <NavLink className="item" to={RoutesString.OurStory}>
              Our story
            </NavLink>
            <NavLink className="item" to={RoutesString.Consulting}>
              Consulting
            </NavLink>
            <NavLink className="item" to={RoutesString.Magazine}>
              Magazine
            </NavLink>
            <NavLink className="item" to={RoutesString.Curriculum}>
              Curriculum
            </NavLink>
            <NavLink className="item" to={RoutesString.Equipment}>
              Equipment
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="FooterWrap">
        <div className={"FooterContainer"}>
          {this.renderSection1()}
          {this.renderSection2()}
          {this.renderSection3()}
        </div>
      </div>
    );
  }
}

export default Footer;
