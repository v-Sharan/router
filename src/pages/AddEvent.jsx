import React, { useState } from "react";
import "../styles/AddEvent.css";

const event = {
  event_name: "Event",
  place: "Chennai",
  date: "01.07.2022",
  image: "https://image-gererator-openai.netlify.app/assets/logo-c1510034.svg",
};

const AddEvent = () => {
  const [form, setForm] = useState({
    event_name: "",
    place: "",
    date: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="event_name">Event name:</label>
      <input
        placeholder="Event Your"
        name="event_name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="place">Place</label>
      <input
        placeholder="Place"
        name="place"
        type="text"
        onChange={handleChange}
      />
      <label htmlFor="date">Date</label>
      <input
        placeholder="Date"
        name="date"
        type="date"
        onChange={handleChange}
      />
      <label htmlFor="image">Image</label>
      <input
        placeholder="Image url"
        type="url"
        name="image"
        onChange={handleChange}
      />
      <button>Add Event</button>
    </form>
  );
};

export default AddEvent;
