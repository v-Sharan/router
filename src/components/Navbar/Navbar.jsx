import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/newEvent">Add new Event</Link>
    </nav>
  );
};

export default Navbar;
