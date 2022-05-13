import React from "react";
import labelStyles from "./label.module.css";
import { PropTypes } from "prop-types";
/**
 *
 * @param {string} title
 * @returns
 */
const Label = (props) => {
    
  const { title } = props;
  return (
    <div className={labelStyles.mylabelRoot}>
    <label className={labelStyles.mylabel}>
      {title}
    </label>
    </div>
  );
};

Label.propTypes = {
  title: PropTypes.string,
};
Label.defaultProps = {
    title:"Task",
}
export default Label;
