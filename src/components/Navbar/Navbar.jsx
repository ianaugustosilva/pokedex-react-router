import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Pikachu
      </Link>
      <Link to="/bulbassaur" className="nav-link">
        Bulbassaur
      </Link>
      <Link to="/totodile" className="nav-link">
        Totodile
      </Link>
    </nav>
  );
};

export default Navbar;
