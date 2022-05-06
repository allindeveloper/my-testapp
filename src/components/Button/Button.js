import React from "react";
import "./button.css"

/**
 * 
 * @param {string} title 
 * @param {function} handleClick 
 * @returns 
 */
const Button = ({title, handleClick}) => {

    return (
        <button className="mybutton" onClick={handleClick}>{title}</button>
    )

}
export default Button;

