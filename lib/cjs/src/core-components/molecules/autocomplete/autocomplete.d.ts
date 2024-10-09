import React from 'react';
import './autocomplete.css';
interface AutocompleteProps {
    value: string;
    onValueChange: (value: string) => void;
    options?: string[];
}
declare const _default: ({ value, onValueChange, options, }: AutocompleteProps) => React.JSX.Element;
export default _default;
