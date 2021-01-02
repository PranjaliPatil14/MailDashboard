import React from "react";
import { Bell, Download, Mail, Menu } from "react-feather";
import "./header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <Menu size={18} className="header-hamburger" />
        <input
          type="search"
          placeholder="Search for Something..."
          className="header-search"
        />
      </div>
      <div className="header-right">
        <Mail />
        <Bell />
        <button className="header-logout" type="submit">
          <Download size={16} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
