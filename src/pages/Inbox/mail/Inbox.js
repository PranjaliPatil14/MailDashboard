import React, { useContext, useState } from "react";
import "./inbox.css";
import MailHeader from "./MailHeader";
import Mail from "./Mail";
import { MailContext } from "../../../context/mailContext";

const Inbox = () => {
  const { loggedInUserMails } = useContext(MailContext);
  const [selectedMails, setSelectedMails] = useState([]);

  return (
    <div className="inbox-mails">
      <MailHeader selectedMails={selectedMails} />
      <div className="mails-content">
        {loggedInUserMails.map((mail) => (
          <Mail mail={mail} setSelectedMails={setSelectedMails} key={mail.id} />
        ))}
      </div>
    </div>
  );
};

export default Inbox;
