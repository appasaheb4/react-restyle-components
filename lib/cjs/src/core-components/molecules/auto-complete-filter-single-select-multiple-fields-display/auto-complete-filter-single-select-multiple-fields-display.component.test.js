"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const auto_complete_filter_single_select_multiple_fields_display_component_1 = require("./auto-complete-filter-single-select-multiple-fields-display.component");
describe('AutoCompleteFilterSingleSelectMultiFieldsDisplay component', () => {
    it('render autoCompleteFilterSingleSelectMultiFieldsDisplay correctly', () => {
        const autoCompleteFilterSingleSelectMultiFieldsDisplay = (0, react_2.render)(react_1.default.createElement(auto_complete_filter_single_select_multiple_fields_display_component_1.AutoCompleteFilterSingleSelectMultiFieldsDisplay, { data: {
                list: [
                    { code: 'Lims', name: 'plus' },
                    { code: 'Lims', name: 'plus' },
                    { code: 'Lims', name: 'plus' },
                ],
                displayKey: ['name'],
            }, onSelect: () => jest.fn(), onFilter: () => jest.fn() }));
        expect(autoCompleteFilterSingleSelectMultiFieldsDisplay).toMatchSnapshot();
    });
});
