import React, { useContext } from "react";
import { Bell, Download, Mail, Menu } from "react-feather";
import "./header.css";
import Badge from "../badge/Badge";
import { MailContext } from "../../context/mailContext";

const Header = () => {
  const { loggedInUserMails } = useContext(MailContext);
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
        <div className="badge-icon">
          <Mail />
          <Badge text={loggedInUserMails.filter(({ read }) => !read).length} />
        </div>
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
