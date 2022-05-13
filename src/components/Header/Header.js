import React from "react";
import headerStyles from "./header.module.css";
import { PropTypes } from "prop-types";
/**
 * @param {string} count
 * @param {string} title
 * @returns
 */
const Header = (props) => {
    
  const { count, title } = props;
  return (
    <header className={headerStyles.myheader}>
      You have {count} {title}
    </header>
  );
};

Header.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
};
Header.defaultProps = {
    count:0,
    title: ""
}
export default Header;
