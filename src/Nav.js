import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/sea">
          <li>Sea</li>
        </Link>
        <Link style={navStyle} to="/mountain">
          <li>Mountain</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
