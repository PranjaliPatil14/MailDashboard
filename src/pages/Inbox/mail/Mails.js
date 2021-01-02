import React from "react";
import "./mail.css";
import MailHeader from "./MailHeader";

const Mails = () => {
  return (
    <div className="inbox-mails">
      <MailHeader />
      <div className="mails-content" />
    </div>
  );
};

export default Mails;
