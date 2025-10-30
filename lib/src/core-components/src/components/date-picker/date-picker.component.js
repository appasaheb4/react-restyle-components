import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerSvg } from '../../library/assets/svg';
import dayjs from 'dayjs';
import { InputWrapper } from '../Form/form.component';
import s from '../../tc.module.css';
import { cn } from '../../utils';
export const DatePickerComp = ({ title = 'Title', className, disable, value, showFormat = 'yyyy-MM-dd', placeholder = 'Select Date', }) => {
    const [pickedDate, setPickedDate] = useState(value && dayjs(value).toDate());
    const CustomInput = forwardRef((props, ref) => {
        return (_jsxs("div", { onClick: !disable && props.onClick, ref: ref, className: cn(s['border-gray-light'], s['place-items-center'], s['border'], s['rounded-md'], s['px-2'], s.flex), children: [_jsx("label", { className: cn(s['mr-3'], s['font-arimaRegular'], s['text-primaryCharcoal'], s['text-lg']), children: props.value || props.placeholder }), _jsx(DatePickerSvg, { width: 15, height: 15 })] }));
    });
    CustomInput.displayName = 'CustomInput';
    const handleChanges = (date) => {
        setPickedDate(date);
    };
    return (_jsx(InputWrapper, { label: title, children: _jsx("div", { className: cn(s.flex, s['zIndex-999'], className), children: _jsx(DatePicker, { selected: pickedDate || new Date(), dateFormat: showFormat, placeholder: placeholder, onChange: handleChanges, customInput: _jsx(CustomInput, {}) }) }) }));
};
