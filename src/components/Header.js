import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Clicked");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Hello" color="Teal" onClick={onClick} />
    </header>
  );
};

//CSS in JS
// const HeadingStyle = { color: "cyan", backgroundColor: "black" };

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
