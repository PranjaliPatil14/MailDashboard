import React, { useContext } from "react";
import { Bell, Download, Mail, Menu } from "react-feather";
import "./header.css";
import Badge from "../badge/Badge";
import { MailContext } from "../../context/mailContext";
import Button from "../button/Button";
import { UserContext } from "../../context/userContext";

const Header = () => {
  const { loggedInUserMails } = useContext(MailContext);
  const { setLoggedInUser } = useContext(UserContext);
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
          <Button onClick={() => setLoggedInUser({})} className="logout-button">
            Logout
          </Button>
        </button>
      </div>
    </header>
  );
};

export default Header;
