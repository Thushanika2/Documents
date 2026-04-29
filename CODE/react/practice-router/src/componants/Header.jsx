import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <Link to="/" className="Links-page">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="Links-page">
            About
          </Link>
        </li>
        <li>
          <a href="/login" className="Links-page">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
