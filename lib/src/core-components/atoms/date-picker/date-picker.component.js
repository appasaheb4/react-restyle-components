import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, forwardRef } from 'react';
import '../../../tc.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerSvg } from '../../../library/assets/svg';
import dayjs from 'dayjs';
import { InputWrapper } from '../form/form.component';
export const DatePickerComp = ({ title = 'Title', className, disable, value, showFormat = 'yyyy-MM-dd', placeholder = 'Select Date', }) => {
    const [pickedDate, setPickedDate] = useState(value && dayjs(value).toDate());
    const CustomInput = forwardRef((props, ref) => {
        return (_jsxs("div", { onClick: !disable && props.onClick, ref: ref, className: " border-gray-light place-items-center  border rounded-md px-2 flex ", children: [_jsx("label", { className: "mr-3 font-arimaRegular text-primaryCharcoal text-lg", children: props.value || props.placeholder }), _jsx(DatePickerSvg, { width: 15, height: 15 })] }));
    });
    CustomInput.displayName = 'CustomInput';
    const handleChanges = (date) => {
        setPickedDate(date);
    };
    return (_jsx(InputWrapper, { label: title, children: _jsx("div", { className: `${className} flex zIndex-999`, children: _jsx(DatePicker, { selected: pickedDate || new Date(), dateFormat: showFormat, placeholder: placeholder, onChange: handleChanges, customInput: _jsx(CustomInput, {}) }) }) }));
};
