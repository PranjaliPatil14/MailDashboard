import React, { useContext } from "react";
import "./inbox.css";
import MailHeader from "./MailHeader";
import Mail from "./Mail";
import { MailContext } from "../../../context/mailContext";

const Inbox = () => {
  const { loggedInUserMails } = useContext(MailContext);

  return (
    <div className="inbox-mails">
      <MailHeader />
      <div className="mails-content">
        {loggedInUserMails.map((mail) => (
          <Mail
            tag={mail.tag}
            body={mail.body}
            time={mail.time}
            attachment={mail.attachment}
            key={mail.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Inbox;
