import React from "react";
import * as PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, onClick, className, testId }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`button ${className}`}
      data-testid={testId}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  testId: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  testId: "",
};

export default Button;
