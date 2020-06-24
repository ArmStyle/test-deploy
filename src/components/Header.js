import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Contact Us</Link>
      </nav>
      <div>socila Media links</div>
    </header>
  );
};

export default Header;
