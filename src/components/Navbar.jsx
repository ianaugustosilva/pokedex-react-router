import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/bulbassaur">Bulbassaur</Link>
      <Link to="/totodile">Totodile</Link>
    </nav>
  );
};

export default Navbar;
