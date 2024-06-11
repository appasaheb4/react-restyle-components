"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const auto_complete_filter_multiple_select_multiple_fields_display_component_1 = require("./auto-complete-filter-multiple-select-multiple-fields-display.component");
it('render AutoCompleteFilterMultipleSelectMultipleFieldsDisplay correctly', () => {
    const autoCompleteFilterMultipleSelectMultipleFieldsDisplay = (0, _core_utils_1.render)(react_1.default.createElement(auto_complete_filter_multiple_select_multiple_fields_display_component_1.AutoCompleteFilterMultipleSelectMultipleFieldsDisplay, { data: [], onUpdate: (item) => {
            console.log({ item });
        }, onSelect: (item) => { } }));
    expect(autoCompleteFilterMultipleSelectMultipleFieldsDisplay).toMatchSnapshot();
});
//# sourceMappingURL=auto-complete-filter-multiple-select-multiple-fields-display.component.test.js.map