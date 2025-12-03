import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Input } from '../../core-components/atoms/Input/Input';
import { Textarea, } from '../../core-components/atoms/Textarea/Textarea';
import { PasswordInput, ToggleInput, RadioInput, CheckboxInput, CheckboxGroupInput, DatePickerInput, DropdownInput, TextDropdownInput, PinInput, OtpInput, CssMultilineInput, } from './components';
// Re-export all FormField components for direct use
export { PasswordInput, ToggleInput, RadioInput, CheckboxInput, CheckboxGroupInput, DatePickerInput, DropdownInput, TextDropdownInput, PinInput, OtpInput, CssMultilineInput, } from './components';
export const Label = (props) => (_jsx(_Fragment, { children: _jsx("label", { htmlFor: props.htmlFor, className: `${props.hasError ? 'text-red-400' : 'text-gray-700'} block text-3xs font-medium  mb-1`, style: { ...props.style }, children: props.children }) }));
export const InputWrapper = (props) => (_jsxs("div", { className: props.className, ref: props.ref, children: [_jsx(Label, { htmlFor: props.id || '', hasError: props.hasError, style: { ...props.style }, children: _jsx("span", { className: "dark:text-white", children: props.label }) }), props.children] }));
export const FormField = React.forwardRef(({ label, error, hasError, id, labelProps, required, type = 'text', showPasswordToggle, radioOptions, checkboxLabel, checkboxOptions, isToggleLabel = true, dateFormat = 'yyyy-MM-dd', dropdownItems = [], allowCustomInput = true, pinLength = 12, otpLength = 6, pinValue = [], pinErrorMsg, pinDefaultMsg, cssProperties, onReset, onMoreInfo, value, onChange, onValueChange, onBlur, onValueBlur, disabled, children, ...props }, ref) => {
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
    const isInputWrapper = type === 'input-wrapper';
    // Calculate effective error: use error message if provided, otherwise use hasError for styling
    const effectiveError = error || (hasError ? ' ' : undefined);
    // Handle checkbox change
    const handleCheckboxChange = (e) => {
        if (onChange) {
            onChange(e);
        }
    };
    // Render toggle switch
    if (isToggle) {
        return (_jsx(ToggleInput, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: value, onChange: onChange, disabled: disabled, isToggleLabel: isToggleLabel, labelProps: labelProps, className: props.className, ...props }));
    }
    // Render radio buttons
    if (isRadio && radioOptions) {
        return (_jsx(RadioInput, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: value, onChange: onChange, disabled: disabled, radioOptions: radioOptions, name: props.name, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render checkbox
    if (isCheckbox) {
        return (_jsx(CheckboxInput, { ref: ref, id: fieldId, label: label, checkboxLabel: checkboxLabel, error: effectiveError, required: required, value: value, onChange: handleCheckboxChange, disabled: disabled, name: props.name, labelProps: labelProps, ...props }));
    }
    // Render checkbox group
    if (isCheckboxGroup && checkboxOptions) {
        return (_jsx(CheckboxGroupInput, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: value, onChange: onChange, disabled: disabled, checkboxOptions: checkboxOptions, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render date picker
    if (isDatePicker) {
        return (_jsx(DatePickerInput, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: value, onChange: onChange, disabled: disabled, dateFormat: dateFormat, placeholder: props.placeholder, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render input dropdown
    if (isInputDropdown) {
        return (_jsx(DropdownInput, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: value, onChange: onChange, disabled: disabled, dropdownItems: dropdownItems, placeholder: props.placeholder, name: props.name, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render text input dropdown
    if (isTextInputDropdown) {
        return (_jsx(TextDropdownInput, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: value, onChange: onChange, onBlur: props.onBlur, disabled: disabled, dropdownItems: dropdownItems, allowCustomInput: allowCustomInput, placeholder: props.placeholder, name: props.name, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render input PIN
    if (isInputPin) {
        return (_jsx(PinInput, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: pinValue, onChange: onChange, disabled: disabled, pinLength: pinLength, pinErrorMsg: pinErrorMsg, pinDefaultMsg: pinDefaultMsg, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render input OTP
    if (isInputOtp) {
        return (_jsx(OtpInput, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: pinValue, onChange: onChange, disabled: disabled, otpLength: otpLength, pinErrorMsg: pinErrorMsg, pinDefaultMsg: pinDefaultMsg, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render CSS Multiline
    if (isCssMultiline) {
        return (_jsx(CssMultilineInput, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: value, onChange: onChange, disabled: disabled, cssProperties: cssProperties, onReset: onReset, onMoreInfo: onMoreInfo, placeholder: props.placeholder, className: props.className, labelProps: labelProps, ...props }));
    }
    // Render InputWrapper
    if (isInputWrapper) {
        return (_jsxs(InputWrapper, { id: fieldId, label: label, className: props.className, hasError: !!error || !!hasError, style: props.style, ref: ref, children: [children || (_jsx("input", { id: fieldId, type: "text", value: value, onChange: onChange, onFocus: props.onFocus, onBlur: props.onBlur, disabled: disabled, placeholder: props.placeholder, name: props.name, autoComplete: props.autoComplete, autoFocus: props.autoFocus, readOnly: props.readOnly, maxLength: props.maxLength, minLength: props.minLength, tabIndex: props.tabIndex, "aria-label": props['aria-label'], "aria-describedby": props['aria-describedby'], "aria-invalid": props['aria-invalid'], "aria-required": props['aria-required'], style: {
                        width: '100%',
                        padding: '8px 12px',
                        border: error || hasError ? '1px solid #ef4444' : '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                    } })), error && (_jsx("div", { style: {
                        color: '#ef4444',
                        fontSize: '12px',
                        marginTop: '4px',
                    }, children: error }))] }));
    }
    // Render textarea - use Textarea atom component
    if (isTextarea) {
        return (_jsx(Textarea, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: value, onChange: onChange, onValueChange: onValueChange, onBlur: onBlur, onValueBlur: onValueBlur, ...labelProps, ...props }));
    }
    // Render standard input - use Input atom component
    // For password without toggle, use Input atom
    if (isPassword && !showPasswordToggle) {
        return (_jsx(Input, { ref: ref, id: fieldId, type: type, label: label, error: effectiveError, required: required, value: value, onChange: onChange, onValueChange: onValueChange, onBlur: onBlur, onValueBlur: onValueBlur, ...labelProps, ...props }));
    }
    // For password with toggle, use PasswordInput component
    if (isPassword && showPasswordToggle) {
        return (_jsx(PasswordInput, { ref: ref, id: fieldId, label: label, error: effectiveError, required: required, value: value, onChange: onChange, disabled: disabled, labelProps: labelProps, ...props }));
    }
    // Render standard input - use Input atom component
    return (_jsx(Input, { ref: ref, id: fieldId, type: type, label: label, error: effectiveError, required: required, value: value, onChange: onChange, onValueChange: onValueChange, onBlur: onBlur, onValueBlur: onValueBlur, ...labelProps, ...props }));
});
FormField.displayName = 'FormField';
