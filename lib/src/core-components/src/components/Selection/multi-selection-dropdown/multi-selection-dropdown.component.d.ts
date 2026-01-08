import React from 'react';
interface MultiSelectDropdownProps {
    options: Array<string>;
    onSelect: (selectedData: any[]) => void;
    onClear?: () => void;
}
export declare const MultiSelectionDropdown: React.FC<MultiSelectDropdownProps>;
export {};
