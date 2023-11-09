import React from "react";
import PropTypes from "prop-types";

const btnStyle = {
  borderRadius: "5px",
  cursor: "pointer",
  // border: 'none'
};

const DefaultButton = ({ disabled = false, children, ...props }) => {
  return (
    <button disabled={disabled} style={btnStyle} {...props}>
      {children}
    </button>
  );
};

DefaultButton.propTypes = {
  disabled: PropTypes.bool,
};

export default DefaultButton;
