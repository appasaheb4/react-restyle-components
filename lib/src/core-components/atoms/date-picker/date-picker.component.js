import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerSvg } from '../../../library/assets/svg';
import dayjs from 'dayjs';
import { InputWrapper } from '../form/form.component';
export const DatePickerComp = ({ title = 'Title', className, disable, value, showFormat = 'yyyy-MM-dd', placeholder = 'Select Date', }) => {
    const [pickedDate, setPickedDate] = useState(value && dayjs(value).toDate());
    const CustomInput = forwardRef((props, ref) => {
        return (React.createElement("div", { onClick: !disable && props.onClick, ref: ref, className: " border-gray-light place-items-center  border rounded-md px-2 flex " },
            React.createElement("label", { className: "mr-3 font-nunitoSansRegular text-primaryCharcoal text-lg" }, props.value || props.placeholder),
            React.createElement(DatePickerSvg, { width: 15, height: 15 })));
    });
    CustomInput.displayName = 'CustomInput';
    const handleChanges = (date) => {
        setPickedDate(date);
    };
    return (React.createElement(InputWrapper, { label: title },
        React.createElement("div", { className: `${className} flex zIndex-999` },
            React.createElement(DatePicker, { selected: pickedDate || new Date(), dateFormat: showFormat, placeholder: placeholder, onChange: handleChanges, customInput: React.createElement(CustomInput, null) }))));
};
