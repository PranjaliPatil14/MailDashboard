import React from "react";
import * as PropTypes from "prop-types";
import "./badge.css";

const Badge = ({ text }) => {
  return <span className="badge">{text}</span>;
};

Badge.propTypes = {
  text: PropTypes.number.isRequired,
};

export default Badge;
