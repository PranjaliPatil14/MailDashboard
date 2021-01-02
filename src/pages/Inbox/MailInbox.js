import React from "react";
import Header from "../../components/header/Header";
import "./mailInbox.css";
import Menu from "./menu/Menu";
import Inbox from "./mail/Inbox";

const MailInbox = () => {
  return (
    <div className="page">
      <Header />
      <div className="page-content">
        <Menu />
        <Inbox />
      </div>
    </div>
  );
};

export default MailInbox;
