import React, { useContext, useState } from "react";
import * as PropTypes from "prop-types";
import { Paperclip, Star } from "react-feather";
import { UserContext } from "../../../context/userContext";
import "./mail.css";

const Mail = ({ mail, setSelectedMails }) => {
  const { tag, id, time, attachment, body, read, important } = mail;
  const [isSelected, setSelected] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  const onMailSelection = () => {
    setSelected(!isSelected);
    if (isSelected) {
      setSelectedMails((prev) => prev.filter((i) => i !== id));
    } else {
      setSelectedMails((prev) => [...prev, id]);
    }
  };

  const formatDateTime = () => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(time);
    if (date.getDate() === new Date().getDate()) {
      return date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    }
    return `${monthNames[date.getMonth()]} ${date.getDate()}`;
  };

  const getMailClasses = () => {
    let classes = "mail";
    if (read) {
      classes += " read";
    }
    if (isSelected) {
      classes += " selected";
    }
    return classes;
  };

  return (
    <div className={getMailClasses()}>
      <input type="checkbox" onClick={onMailSelection} />
      <div className="mail--important">
        {important ? <Star size={16} /> : <></>}
      </div>
      <p className="mail--from">{loggedInUser.name}</p>
      {tag ? (
        <div className="mail--tags">
          <span>{tag}</span>
        </div>
      ) : (
        <div />
      )}
      <p className="mail--body"> {body}</p>
      <span className="mail--attachment">
        {attachment ? <Paperclip size={12} /> : <></>}
      </span>
      <span className="mail-deliveryTime">{formatDateTime()}</span>
    </div>
  );
};

Mail.propTypes = {
  mail: PropTypes.instanceOf(Object).isRequired,
  setSelectedMails: PropTypes.func.isRequired,
};

Mail.defaultProps = {};

export default Mail;
