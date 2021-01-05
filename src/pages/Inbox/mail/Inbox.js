import React, { useContext, useState } from "react";
import "./inbox.css";
import MailHeader from "./MailHeader";
import Mail from "./Mail";
import { MailContext } from "../../../context/mailContext";

const Inbox = () => {
  const { loggedInUserMails } = useContext(MailContext);
  const [selectedMails, setSelectedMails] = useState([]);

  const sortedMails = loggedInUserMails.sort((a, b) => {
    return new Date(b.time) - new Date(a.time);
  });

  return (
    <div className="inbox-mails">
      <MailHeader selectedMails={selectedMails} />
      <div className="mails-content">
        {sortedMails.map((mail) => (
          <Mail mail={mail} setSelectedMails={setSelectedMails} key={mail.id} />
        ))}
      </div>
    </div>
  );
};

export default Inbox;
