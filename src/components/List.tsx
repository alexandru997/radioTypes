import React from "react";
import { RadioButtons, RadioButtonsProps } from "./RadioButtons";

export const List: React.FC<{
  items: RadioButtonsProps[];
  activeItem: string;
  setActiveItem: (key: string) => void;
}> = ({ items, activeItem, setActiveItem }) => {
  return (
    <div>
      <ul>
        {items.map((item: RadioButtonsProps, index: number) => {
          return (
            <RadioButtons
              key={index + 1}
              item={item}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
