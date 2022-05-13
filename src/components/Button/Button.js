import React from "react";
// import "./button.css"
import buttonStyles from "./button.module.css";
import { PropTypes } from "prop-types";
/**
 *
 * @param {string} title
 * @param {Component} image
 * @param {function} handleClick
 * @returns
 */
const Button = (props) => {
    
  const { title, handleClick, image } = props;
  return (
    <button className={buttonStyles.mybutton} onClick={handleClick}>
      {image}{title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
  image: PropTypes.node
};
Button.defaultProps = {
    title:"Click this",
}
export default Button;
