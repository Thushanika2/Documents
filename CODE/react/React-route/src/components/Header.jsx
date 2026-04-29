import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <div className="header">
        <ul>
          <li>
            <Link to="/" className="Link-page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="Link-page">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="Link-page">
              Contact
            </Link>
          </li>
        </ul>
        </div>
      
    </>
  );
}

export default Header;
