import React from "react";

/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @returns 
 */
const InputField = ({placeholder, value}) => {

    return (
        <input value={value} placeholder={placeholder} />
    )

}
export default InputField;

