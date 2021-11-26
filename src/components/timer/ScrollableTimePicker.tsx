import React, { useState } from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import DatePicker from "react-mobile-datepicker";

import "./Scrollable.css";
import { TimeProps } from "./ScrollableTimePickerProps";
const dateConfig: TimeProps = {
  hour: {
    format: "hh",
    caption: "Hour",
    step: 1,
  },
  minute: {
    format: "mm",
    caption: "Min",
    step: 1,
  },
};
/*

tipizez 

*/
const ScrollableTimePicker = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  const handleSelect = (time: Date) => {
    setTime(time);
    console.log(time);
  };
  const handleCancel = (time: Date) => {
    setTime(new Date());
    console.log(time);
    setIsOpen(false);
  };
  return (
    <div>
      <a className="select-btn" onClick={handleClick}>
        From time to time
      </a>
      <DatePicker
        // value={time}
        isOpen={isOpen}
        onSelect={handleSelect}
        onCancel={handleCancel}
        showCaption={true}
        confirmText={"confirm"}
        cancelText={"restart"}
        handleCancel={setIsOpen}
        dateConfig={dateConfig}
      />
    </div>
  );
};

export default ScrollableTimePicker;
