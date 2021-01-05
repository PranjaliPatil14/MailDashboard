import React from "react";
import * as PropTypes from "prop-types";
import "./badge.css";

const Badge = ({ text }) => {
  const backgroundColor = ["#F9AD50", "#F05262", "#0DC6C9", "#02B493"];
  return (
    <span
      className="badge"
      style={{
        backgroundColor:
          backgroundColor[Math.round(Math.random() * (3 - 0) + 0)],
      }}
    >
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Badge;
