import React from "react";
import Header from "../../components/header/Header";
import "./inbox.css";
import Menu from "./components/Menu";

const Inbox = () => {
  return (
    <div className="page">
      <Header />
      <div className="page-content">
        <Menu />
      </div>
    </div>
  );
};

export default Inbox;
