import React from "react";
import "./inbox.css";
import MailHeader from "./MailHeader";
import Mail from "./Mail";

const Inbox = () => {
  return (
    <div className="inbox-mails">
      <MailHeader />
      <div className="mails-content">
        <Mail />
      </div>
    </div>
  );
};

export default Inbox;
