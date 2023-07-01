import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/events"
      >
        Events
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/newEvent"
      >
        Add new Event
      </NavLink>
    </nav>
  );
};

export default Navbar;
