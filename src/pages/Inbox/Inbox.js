import React from "react";
import Header from "../../components/header/Header";
import "./inbox.css";
import Menu from "./menu/Menu";
import Mails from "./mail/Mails";

const Inbox = () => {
  return (
    <div className="page">
      <Header />
      <div className="page-content">
        <Menu />
        <Mails />
      </div>
    </div>
  );
};

export default Inbox;
