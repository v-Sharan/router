import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/newEvent">Add new Event</Link>
    </div>
  );
};

export default Navbar;
