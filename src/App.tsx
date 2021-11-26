import React from "react";
import "./App.css";
import { RadioButtonsProps } from "./components/RadioButtons";
import List from "./components/List";
import ScrollableTimePicker from "./components/timer/ScrollableTimePicker";

function App() {
  const [activeItem, setActiveItem] = React.useState("");

  const items: RadioButtonsProps[] = [
    {
      key: "09:00-18:00",
      value: "09:00-18:00",
      name: "9-18",
    },
    {
      key: "10:00-19:00",
      value: "10:00-19:00",
      name: "9-18",
    },
    {
      key: "08:00-17:00",
      value: "08:00-17:00",
      name: "9-18",
    },
    {
      key: "Specific",
      value: "Specific Time",
      name: "9-18",
    },
  ];
  return (
    <div className="list">
      <List
        items={items}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      ></List>
      {activeItem === "Specific" ? <ScrollableTimePicker /> : null}
    </div>
  );
}

export default App;
