"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const autocomplete_1 = require("./autocomplete");
const TEST_OPTIONS = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];
test('Render Autocomplete', () => {
    (0, react_2.render)(react_1.default.createElement(autocomplete_1.Autocomplete, { value: "", onValueChange: () => { }, options: TEST_OPTIONS }));
    expect(react_2.screen.getByRole('input')).toBeInTheDocument();
    expect(react_2.screen.getByRole('list')).toBeInTheDocument();
});
test('Autocomplete with empty list', () => {
    (0, react_2.render)(react_1.default.createElement(autocomplete_1.Autocomplete, { value: "", onValueChange: () => { }, options: [] }));
    expect(react_2.screen.getByRole('input')).toBeInTheDocument();
    expect(react_2.screen.queryByRole('list')).not.toBeInTheDocument();
});
test('Autocomplete list arrow navigation', () => {
    const onValueChange = jest.fn();
    window.HTMLElement.prototype.scroll = function () { };
    (0, react_2.render)(react_1.default.createElement(autocomplete_1.Autocomplete, { value: "", onValueChange: onValueChange, options: TEST_OPTIONS }));
    expect(onValueChange).toHaveBeenCalledWith('ONE');
    react_2.fireEvent.keyDown(react_2.screen.getByRole('input'), { keyCode: 40 }); //down
    expect(onValueChange).toHaveBeenCalledWith('TWO');
    expect(react_2.screen.getByText('TWO')).toHaveClass('active-option');
    expect(react_2.screen.getByText('THREE')).toBeInTheDocument();
    react_2.fireEvent.keyDown(react_2.screen.getByRole('input'), { keyCode: 40 }); //down
    expect(onValueChange).toHaveBeenCalledWith('THREE');
    expect(react_2.screen.getByText('THREE')).toHaveClass('active-option');
});
test('Autocomplete list option click', () => {
    const onValueChange = jest.fn();
    (0, react_2.render)(react_1.default.createElement(autocomplete_1.Autocomplete, { value: "", onValueChange: onValueChange, options: TEST_OPTIONS }));
    react_2.fireEvent.click(react_2.screen.getByText('FOUR'));
    expect(react_2.screen.getByRole('input')).toHaveValue('FOUR');
    expect(onValueChange).toHaveBeenCalledWith('FOUR');
    expect(react_2.screen.queryByRole('list')).not.toBeInTheDocument();
});
test('Autocomplete search', () => {
    const onValueChange = jest.fn();
    (0, react_2.render)(react_1.default.createElement(autocomplete_1.Autocomplete, { value: "", onValueChange: onValueChange, options: TEST_OPTIONS }));
    react_2.fireEvent.change(react_2.screen.getByRole('input'), { target: { value: 'f' } });
    for (let option of TEST_OPTIONS) {
        if (option.toLowerCase().indexOf('f') > -1) {
            expect(react_2.screen.getAllByRole('listitem')).toHaveLength(2);
            expect(react_2.screen.queryByText(option)).toBeInTheDocument();
        }
        else {
            expect(react_2.screen.queryByText(option)).not.toBeInTheDocument();
        }
    }
});
test('Autocomplete search default value', () => {
    const onValueChange = jest.fn();
    (0, react_2.render)(react_1.default.createElement(autocomplete_1.Autocomplete, { value: "TWO", onValueChange: onValueChange, options: TEST_OPTIONS }));
    expect(react_2.screen.getByText('TWO')).toHaveClass('active-option');
});
test('Autocomplete search no result', () => {
    const onValueChange = jest.fn();
    (0, react_2.render)(react_1.default.createElement(autocomplete_1.Autocomplete, { value: "", onValueChange: onValueChange, options: TEST_OPTIONS }));
    react_2.fireEvent.change(react_2.screen.getByRole('input'), { target: { value: 'hello' } });
    expect(react_2.screen.queryByRole('list')).not.toBeInTheDocument();
    expect(react_2.screen.getByText('No match')).toBeInTheDocument();
});
test('Autocomplete with value not in list', () => {
    (0, react_2.render)(react_1.default.createElement(autocomplete_1.Autocomplete, { value: "xxx", onValueChange: () => { }, options: TEST_OPTIONS }));
    expect(react_2.screen.getByRole('input')).toBeInTheDocument();
    expect(react_2.screen.getByText('ONE')).toHaveClass('active-option');
});
