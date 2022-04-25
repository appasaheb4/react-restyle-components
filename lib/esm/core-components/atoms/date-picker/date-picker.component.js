import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as DatePickerSvg } from "@assets/svg/datePicker.svg";
import dayjs from "dayjs";
export const DatePickerComp = ({
  className,
  disable,
  value,
  showFormat = "yyyy-MM-dd",
  placeholder = "Select Date",
}) => {
  const [pickedDate, setPickedDate] = useState(value && dayjs(value).toDate());
  const CustomInput = forwardRef((props, ref) => {
    return React.createElement(
      "div",
      {
        onClick: !disable && props.onClick,
        ref: ref,
        className:
          " border-gray-light place-items-center  border rounded-md px-2 flex flex-wrap ",
      },
      React.createElement(
        "label",
        {
          className: "mr-3 font-nunitoSansRegular text-primaryCharcoal text-lg",
        },
        props.value || props.placeholder
      ),
      React.createElement(DatePickerSvg, { width: 15, height: 15 })
    );
  });
  CustomInput.displayName = "CustomInput";
  const handleChanges = (date) => {
    setPickedDate(date);
  };
  return React.createElement(
    "div",
    { className: `${className}   items-center flex justify-start ` },
    React.createElement(
      "div",
      { className: "flex-wrap" },
      React.createElement(DatePicker, {
        selected: pickedDate || new Date(),
        dateFormat: showFormat,
        placeholder: placeholder,
        onChange: handleChanges,
        customInput: React.createElement(CustomInput, null),
      })
    )
  );
};
//# sourceMappingURL=date-picker.component.js.map
