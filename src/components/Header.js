import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={HeadingStyle}>{title}</h1>
    </header>
  );
};

const HeadingStyle = { color: "cyan", backgroundColor: "black" };

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
