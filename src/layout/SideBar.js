import React, { useState } from "react";
import { ChevronLeft, ChevronDown } from "react-feather";
import ProfileImage from "../assets/images/profile-image.png";

import "./SideBar.css";
import menuConfig from "./menuConfig";

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);

  const getIcons = () => {
    return (
      <>
        {menuConfig.map(({ Component, key }) => (
          <li key={key} className="sidebar--menu-item">
            <Component className="menu-icon" />
          </li>
        ))}
      </>
    );
  };

  const getToggleIcon = (active, submenu) => {
    if (active && submenu.length) {
      return <ChevronDown />;
    }
    if (submenu.length) {
      return <ChevronLeft />;
    }
    return "";
  };

  const getMenu = () => {
    return (
      <>
        {menuConfig.map(({ Component, key, title, subMenu, active }) => (
          <div className={active ? "active-menu" : ""} key={key}>
            <li className="sidebar--menu-item expanded">
              <Component className="menu-icon" />
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

  // TODO: toggle sidebar on outside click

  return (
    <nav className={`sidebar ${expanded ? "expanded" : ""}`}>
      <button
        className="sidebar--toggle"
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
          <h2 className="sidebar--toggle-text">IN+</h2>
        )}
      </button>
      <ul className={`sidebar--menu ${expanded ? "expanded" : ""}`}>
        {expanded ? getMenu() : getIcons()}
      </ul>
    </nav>
  );
};

export default SideBar;
