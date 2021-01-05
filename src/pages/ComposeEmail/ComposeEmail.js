import React, { useContext, useState } from "react";
import * as PropTypes from "prop-types";
import Button from "../../components/button/Button";
import { UserContext } from "../../context/userContext";
import "./composeEmail.css";
import { MailContext } from "../../context/mailContext";
import { SEND_MAIL } from "../../context/mailReducer";

const ComposeEmail = ({ setShowCompose }) => {
  const [to, setTo] = useState("");
  const [cc, setCC] = useState("");
  const [body, setBody] = useState("");

  const { loggedInUser, users } = useContext(UserContext);
  const { dispatch } = useContext(MailContext);

  const onSubmit = () => {
    const toMail = users.find((user) => user.email === to).id;
    const ccMail = users.find((user) => user.email === cc)?.id ?? -1;
    const newMail = {
      id: `${Math.random() * 1000}-${new Date().toString()}`,
      from: loggedInUser.id,
      to: [toMail],
      cc: [ccMail],
      body,
      attachment: false,
      time: new Date().toString(),
      tag: "",
      read: false,
      important: false,
    };
    dispatch({ type: SEND_MAIL, data: newMail });
    setTimeout(() => setShowCompose(false));
  };
  return (
    <div className="compose-mail-form">
      <div className="recipients">
        <input
          onChange={({ target }) => setTo(target.value)}
          value={to}
          placeholder="TO"
          data-testid="to"
        />
        <input
          onChange={({ target }) => setCC(target.value)}
          value={cc}
          placeholder="CC"
          data-testid="cc"
        />
      </div>
      <div className="compose-mail--body">
        <textarea
          onChange={({ target }) => setBody(target.value)}
          value={body}
          data-testid="body"
          placeholder="Please write your message here"
        />
      </div>
      <Button onClick={onSubmit} className="send-mail">
        Send
      </Button>
    </div>
  );
};

ComposeEmail.propTypes = {
  setShowCompose: PropTypes.func.isRequired,
};

export default ComposeEmail;
