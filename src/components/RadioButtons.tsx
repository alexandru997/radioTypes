import React from "react";

export interface RadioButtonsProps {
  key: string;
  value: string;
  name: string;
}

export const RadioButtons: React.FC<{
  item: RadioButtonsProps;
  activeItem: string;
  setActiveItem: (key: string) => void;
}> = ({ item, activeItem, setActiveItem }) => {
  return (
    <li key={item.key} className={activeItem === item.key ? "active" : ""}>
      <input
        type="radio"
        value={item.value}
        name={item.name}
        onClick={() => {
          setActiveItem(item.key);
        }}
      />
      <label>{item.value}</label>
    </li>
  );
};
