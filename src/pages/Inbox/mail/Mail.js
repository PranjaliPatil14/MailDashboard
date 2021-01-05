import React, { useContext } from "react";
import * as PropTypes from "prop-types";
import { Paperclip } from "react-feather";
import { UserContext } from "../../../context/userContext";
import "./mail.css";

const Mail = ({ tag, body, time, attachment }) => {
  const { loggedInUser } = useContext(UserContext);

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

  return (
    <div className="mail">
      <input type="checkbox" />
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
  tag: PropTypes.string,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  attachment: PropTypes.bool,
};

Mail.defaultProps = {
  tag: "",
  attachment: false,
};

export default Mail;
