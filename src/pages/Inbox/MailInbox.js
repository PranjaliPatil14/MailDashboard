import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./mailInbox.css";
import Menu from "./menu/Menu";
import Inbox from "./mail/Inbox";
import ComposeEmail from "../ComposeEmail/ComposeEmail";

const MailInbox = () => {
  const [showCompose, setShowCompose] = useState(false);

  return (
    <div className="page">
      {showCompose && <ComposeEmail setShowCompose={setShowCompose} />}
      <Header />
      <div className="page-content">
        <Menu setShowCompose={setShowCompose} />
        <Inbox />
      </div>
    </div>
  );
};

export default MailInbox;
