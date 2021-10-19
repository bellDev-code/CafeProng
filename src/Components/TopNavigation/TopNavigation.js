import React, { Component } from "react";
import "./TopNavigation.scss";

import logoimg from "../../_asset/images/main/logo.svg";
import menuicon from "../../_asset/images/main/menu-icon.svg";
import closeicon from "../../_asset/images/common/close-icon.svg";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

class TopNavigation extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className="TopNavigationContainer">
        <div className="TopNavigationContainerBox">
          <div className="Logo">
            <NavLink exact to="/">
              <img src={logoimg} alt="menuicon"></img>
            </NavLink>
          </div>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            right
            customCrossIcon={<img src={closeicon} alt="closeicon" />}
            customBurgerIcon={
              <img className="MenuIcon" src={menuicon} alt=""></img>
            }
          >
            <NavLink
              className="test"
              onClick={() => this.closeMenu()}
              exact={true}
              id="home"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="test"
              onClick={() => this.closeMenu()}
              id="ourstory"
              to="/ourStory"
            >
              Our story
            </NavLink>
            <NavLink
              className="test"
              onClick={() => this.closeMenu()}
              id="consulting"
              to="/consulting"
            >
              Consulting
            </NavLink>
            <NavLink
              className="test"
              onClick={() => this.closeMenu()}
              id="magazine"
              to="/magazine"
            >
              Magazine
            </NavLink>
            <NavLink
              className="test"
              onClick={() => this.closeMenu()}
              id="curriculum"
              to="/curriculum"
            >
              Curriculum
            </NavLink>
            {/* <NavLink
              className="test"
              onClick={() => this.closeMenu()}
              id="ingredients"
              to="/ingredients"
            >
              Ingredients
            </NavLink> */}
            <NavLink
              className="test"
              onClick={() => this.closeMenu()}
              id="equipments"
              to="/equipment"
            >
              Equipment
            </NavLink>
            <div className="SNSLinksBox">
              <div className="SnsName">
                <a
                  href="http://www.instagram.com/prong_specialty_coffee"
                  target=" _blank"
                >
                  Insta
                </a>
              </div>
              <div className="SnsName">
                <a href="#h">youtube</a>
              </div>
              <div className="SnsName">
                <a href="#h">facebook</a>
              </div>
            </div>
          </Menu>
        </div>
      </div>
    );
  }
}

export default TopNavigation;
