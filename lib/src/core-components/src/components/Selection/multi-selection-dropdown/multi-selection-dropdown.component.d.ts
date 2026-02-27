import React from 'react';
interface MultiSelectDropdownProps {
    options: Array<string>;
    onSelect: (selectedData: string[]) => void;
    onClear?: () => void;
    placeholder?: string;
    disabled?: boolean;
}
export declare const MultiSelectionDropdown: React.FC<MultiSelectDropdownProps>;
export {};
