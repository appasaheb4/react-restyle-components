"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const auto_complete_filter_multiple_select_multiple_fields_display_component_1 = require("./auto-complete-filter-multiple-select-multiple-fields-display.component");
const meta = {
    title: 'Design System/Molecules/AutoCompleteFilterMultipleSelectMultipleFieldsDisplay',
    component: auto_complete_filter_multiple_select_multiple_fields_display_component_1.AutoCompleteFilterMultipleSelectMultipleFieldsDisplay,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { AutoCompleteFilterMultipleSelectMultipleFieldsDisplay } from 'react-restyle-components'`,
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        data: {
            list: [
                {
                    _id: '66532a99bbfed4eea86eae23',
                    code: 82,
                    description: 'TEST1',
                    libraryCode: 'ABCD',
                },
                {
                    _id: '6652b6d8bcef7f713cb547d4',
                    code: 81,
                    description: 'TEST New',
                    libraryCode: 'TEST',
                },
            ],
            selected: [
                {
                    _id: '66532a99bbfed4eea86eae23',
                    code: 82,
                    description: 'TEST1',
                    libraryCode: 'ABCD',
                },
            ],
            displayKey: ['libraryCode', 'description'],
        },
        onUpdate: (item) => {
            console.log({ item });
        },
        onSelect: (item) => {
            console.log({ item });
        },
    },
};
