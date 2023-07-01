import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/events" element={<h1>Event</h1>} />
      <Route path="/newEvent" element={<h1>New Event</h1>} />
    </Routes>
  );
};

export default App;