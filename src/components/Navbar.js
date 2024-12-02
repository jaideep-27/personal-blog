import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";  // Make sure the path to your CSS file is correct

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/create" className="navbar-link">Create New Post</Link>
    </nav>
  );
}

export default Navbar;
