import React from "react";
import buttonStyles from "./custombutton.module.css";
import { PropTypes } from "prop-types";
/**
 *
 * @param {string} title
 * @param {function} handleClick
 * @returns
 */
const CustomButton = (props) => {
    
  const { title, handleClick } = props;
  return (
    <button className={buttonStyles.custombutton} onClick={handleClick}>
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
};
CustomButton.defaultProps = {
    title:"Submit",
}
export default CustomButton;
