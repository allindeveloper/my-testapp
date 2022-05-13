import React from "react";
import { PropTypes } from "prop-types";
import customInputStyles from "./custominput.module.css";
/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @returns
 */
const CustomInput = ({ placeholder, value, onInputChange }) => {
  return (
    <input
      className={customInputStyles.myinput}
      onChange={onInputChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

CustomInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func,
};
CustomInput.defaultProps = {
  placeholder: "Enter Item",
};
export default CustomInput;
