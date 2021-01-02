import React from "react";
import * as PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, onClick, className }) => {
  return (
    <button type="submit" onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};

export default Button;
