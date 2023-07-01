import { createContext, useState, useContext } from "react";

const Store = createContext({
  events: [],
  handleAddEvent: (event) => {},
});

export const useStore = () => {
  return useContext(Store);
};

const Provider = (props) => {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <Store.Provider value={{ events, handleAddEvent }}>
      {props.children}
    </Store.Provider>
  );
};

export default Provider;
