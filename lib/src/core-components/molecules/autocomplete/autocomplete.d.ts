import React from 'react';
import './autocomplete.css';
import '../../../tc.css';
interface AutocompleteProps {
    value: string;
    onValueChange: (value: string) => void;
    options?: string[];
}
export declare const Autocomplete: ({ value, onValueChange, options, }: AutocompleteProps) => React.JSX.Element;
export {};
