import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Input } from '../../core-components/atoms/Input/Input';
import { Textarea, } from '../../core-components/atoms/Textarea/Textarea';
import { PasswordInput, ToggleInput, RadioInput, CheckboxInput, CheckboxGroupInput, DatePickerInput, DropdownInput, TextDropdownInput, PinInput, OtpInput, CssMultilineInput, } from './components';
// Re-export all FormField components for direct use
export { PasswordInput, ToggleInput, RadioInput, CheckboxInput, CheckboxGroupInput, DatePickerInput, DropdownInput, TextDropdownInput, PinInput, OtpInput, CssMultilineInput, } from './components';
export const FormField = React.forwardRef(({ label, error, id, labelProps, required, type = 'text', showPasswordToggle, radioOptions, checkboxLabel, checkboxOptions, isToggleLabel = true, dateFormat = 'yyyy-MM-dd', dropdownItems = [], allowCustomInput = true, pinLength = 12, otpLength = 6, pinValue = [], pinErrorMsg, pinDefaultMsg, cssProperties, onReset, onMoreInfo, value, onChange, disabled, ...props }, ref) => {
    const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
    const isTextarea = type === 'textarea';
    const isToggle = type === 'toggle';
    const isRadio = type === 'radio';
    const isCheckbox = type === 'checkbox';
    const isCheckboxGroup = type === 'checkbox-group';
    const isDatePicker = type === 'date-picker';
    const isInputDropdown = type === 'input-dropdown';
    const isTextInputDropdown = type === 'text-input-dropdown';
    const isInputPin = type === 'input-pin';
    const isInputOtp = type === 'input-otp';
    const isCssMultiline = type === 'css-multiline';
    const isPassword = type === 'password';
    // Handle checkbox change
    const handleCheckboxChange = (e) => {
        if (onChange) {
            onChange(e);
        }
    };
    // Render toggle switch
    if (isToggle) {
        return (_jsx(ToggleInput, { ref: ref, id: fieldId, label: label, error: error, required: required, value: value, onChange: onChange, disabled: disabled, isToggleLabel: isToggleLabel, labelProps: labelProps, className: props.className, ...props }));
    }
    // Render radio buttons
    if (isRadio && radioOptions) {
        return (_jsx(RadioInput, { ref: ref, id: fieldId, label: label, error: error, required: required, value: value, onChange: onChange, disabled: disabled, radioOptions: radioOptions, name: props.name, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render checkbox
    if (isCheckbox) {
        return (_jsx(CheckboxInput, { ref: ref, id: fieldId, label: label, checkboxLabel: checkboxLabel, error: error, required: required, value: value, onChange: handleCheckboxChange, disabled: disabled, name: props.name, labelProps: labelProps, ...props }));
    }
    // Render checkbox group
    if (isCheckboxGroup && checkboxOptions) {
        return (_jsx(CheckboxGroupInput, { ref: ref, id: fieldId, label: label, error: error, required: required, value: value, onChange: onChange, disabled: disabled, checkboxOptions: checkboxOptions, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render date picker
    if (isDatePicker) {
        return (_jsx(DatePickerInput, { ref: ref, id: fieldId, label: label, error: error, required: required, value: value, onChange: onChange, disabled: disabled, dateFormat: dateFormat, placeholder: props.placeholder, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render input dropdown
    if (isInputDropdown) {
        return (_jsx(DropdownInput, { ref: ref, id: fieldId, label: label, error: error, required: required, value: value, onChange: onChange, disabled: disabled, dropdownItems: dropdownItems, placeholder: props.placeholder, name: props.name, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render text input dropdown
    if (isTextInputDropdown) {
        return (_jsx(TextDropdownInput, { ref: ref, id: fieldId, label: label, error: error, required: required, value: value, onChange: onChange, onBlur: props.onBlur, disabled: disabled, dropdownItems: dropdownItems, allowCustomInput: allowCustomInput, placeholder: props.placeholder, name: props.name, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render input PIN
    if (isInputPin) {
        return (_jsx(PinInput, { ref: ref, id: fieldId, label: label, error: error, required: required, value: pinValue, onChange: onChange, disabled: disabled, pinLength: pinLength, pinErrorMsg: pinErrorMsg, pinDefaultMsg: pinDefaultMsg, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render input OTP
    if (isInputOtp) {
        return (_jsx(OtpInput, { ref: ref, id: fieldId, label: label, error: error, required: required, value: pinValue, onChange: onChange, disabled: disabled, otpLength: otpLength, pinErrorMsg: pinErrorMsg, pinDefaultMsg: pinDefaultMsg, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render CSS Multiline
    if (isCssMultiline) {
        return (_jsx(CssMultilineInput, { ref: ref, id: fieldId, label: label, error: error, required: required, value: value, onChange: onChange, disabled: disabled, cssProperties: cssProperties, onReset: onReset, onMoreInfo: onMoreInfo, placeholder: props.placeholder, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render textarea - use Textarea atom component
    if (isTextarea) {
        return (_jsx(Textarea, { ref: ref, id: fieldId, label: label, error: error, required: required, ...labelProps, ...props }));
    }
    // Render standard input - use Input atom component
    // For password without toggle, use Input atom
    if (isPassword && !showPasswordToggle) {
        return (_jsx(Input, { ref: ref, id: fieldId, type: type, label: label, error: error, required: required, ...labelProps, ...props }));
    }
    // For password with toggle, use PasswordInput component
    if (isPassword && showPasswordToggle) {
        return (_jsx(PasswordInput, { ref: ref, id: fieldId, label: label, error: error, required: required, value: value, onChange: onChange, disabled: disabled, labelProps: labelProps, ...props }));
    }
    // Render standard input - use Input atom component
    return (_jsx(Input, { ref: ref, id: fieldId, type: type, label: label, error: error, required: required, ...labelProps, ...props }));
});
FormField.displayName = 'FormField';
