import React, { useState } from "react";
import { ChevronLeft, ChevronDown } from "react-feather";
import * as PropTypes from "prop-types";
import ProfileImage from "../assets/images/profile-image.png";

import "./Navigation.css";
import menuConfig from "./menuConfig";

const Navigation = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const getIcons = () => {
    return (
      <>
        {menuConfig.map(({ Component, key }) => (
          <li key={key} className="navigation--menu-item">
            <Component className="menu-icon" />
          </li>
        ))}
      </>
    );
  };

  const getToggleIcon = (active, submenu) => {
    if (active && submenu.length) {
      return <ChevronDown size={18} />;
    }
    if (submenu.length) {
      return <ChevronLeft size={18} />;
    }
    return "";
  };

  const getMenu = () => {
    return (
      <>
        {menuConfig.map(({ Component, key, title, subMenu, active }) => (
          <div className={active ? "active-menu" : ""} key={key}>
            <li className="navigation--menu-item expanded">
              <Component className="menu-icon" size={18} />
              <span className="menu-title">{title}</span>
              <span className="menu-toggle">
                {getToggleIcon(active, subMenu)}
              </span>
            </li>

            <ul className="submenu">
              {subMenu.length && active ? (
                subMenu.map(({ title: menuTitle }) => (
                  <li key={menuTitle} className="submenu-item">
                    <span className="menu-title">{menuTitle}</span>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
        ))}
      </>
    );
  };

  // TODO: toggle navigation on outside click

  return (
    <div className="navigation--wrapper">
      <nav className={`navigation ${expanded ? "expanded" : ""}`}>
        <button
          className="navigation--toggle"
          onClick={() => setExpanded(!expanded)}
          type="submit"
        >
          {expanded ? (
            <div className="user-profile">
              <img
                src={ProfileImage}
                alt="profile"
                className="user-profile--image"
              />
              <strong className="user-profile--name">User Name</strong>
              <p className="user-profile--role">
                role <span>▼</span>
              </p>
            </div>
          ) : (
            <h2 className="navigation--toggle-text">IN+</h2>
          )}
        </button>
        <ul className={`navigation--menu ${expanded ? "expanded" : ""}`}>
          {expanded ? getMenu() : getIcons()}
        </ul>
      </nav>
      {children}
    </div>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
