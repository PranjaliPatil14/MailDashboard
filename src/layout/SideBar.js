import React, { useState } from "react";
import {
  Grid,
  Award,
  BarChart2,
  Mail,
  PieChart,
  CloudLightning,
  Edit,
  Monitor,
  Copy,
  Globe,
  AlertTriangle,
  Tv,
  ChevronLeft,
  ChevronDown,
} from "react-feather";

import "./SideBar.css";

const menu = [
  {
    Component: Grid,
    key: "Grid",
    subMenu: [{ title: "Global Dashboard" }],
    title: "Dashboards",
  },
  { Component: Award, key: "Award", subMenu: [], title: "Layouts" },
  { Component: BarChart2, key: "BarChart2", subMenu: [], title: "Graphs" },
  {
    Component: Mail,
    key: "Mail",
    subMenu: [
      { title: "Inbox" },
      { title: "Email view" },
      { title: "Compose email" },
      { title: "Email templates" },
    ],
    title: "Mailbox",
    active: true,
  },
  { Component: PieChart, key: "PieChart", subMenu: [], title: "Metrics" },
  {
    Component: CloudLightning,
    key: "CloudLightning",
    subMenu: [],
    title: "Widgets",
  },
  {
    Component: Edit,
    key: "Edit",
    subMenu: [{ title: "Sign-up Form" }],
    title: "Forms",
  },
  { Component: Monitor, key: "Monitor", subMenu: [], title: "App Views" },
  { Component: Copy, key: "Copy", subMenu: [], title: "Files" },
  { Component: Globe, key: "Globe", subMenu: [], title: "World" },
  {
    Component: AlertTriangle,
    key: "AlertTriangle",
    subMenu: [],
    title: "Alerts",
  },
  { Component: Tv, key: "Tv", subMenu: [], title: "Monitor" },
];

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);

  const getIcons = () => {
    return (
      <>
        {menu.map(({ Component, key }) => (
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
        {menu.map(({ Component, key, title, subMenu, active }) => (
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

  return (
    <nav className={`sidebar ${expanded ? "expanded" : ""}`}>
      <button
        className="sidebar--toggle"
        onClick={() => setExpanded(!expanded)}
        type="submit"
      >
        <h2 className="sidebar--toggle-text">IN+</h2>
      </button>
      <ul className={`sidebar--menu ${expanded ? "expanded" : ""}`}>
        {expanded ? getMenu() : getIcons()}
      </ul>
    </nav>
  );
};

export default SideBar;
