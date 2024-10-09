"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const user_event_1 = __importDefault(require("@testing-library/user-event"));
const form_component_1 = require("./form.component");
describe('Checkbox component', () => {
    it('render checkbox correctly', () => {
        const checkbox = (0, react_2.render)(react_1.default.createElement(form_component_1.CheckBox, null));
        expect(checkbox).toMatchSnapshot();
    });
});
describe('Input component', () => {
    it('render input correctly', () => {
        const inputComp = (0, react_2.render)(react_1.default.createElement(form_component_1.Input, { type: "text", value: "test", onChange: (val) => jest.fn(), onBlur: (value) => jest.fn(), onKeyDown: (val) => jest.fn() }));
        const input = inputComp.getByTestId('INPT');
        react_2.fireEvent.change(input, { target: { value: 'check' } });
        user_event_1.default.type(input, 'value');
        react_2.fireEvent.blur(input);
        react_2.fireEvent.keyDown(input, {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            charCode: 27,
        });
        react_2.fireEvent.keyPress(input, { key: 'Enter', keyCode: 13 });
        expect(input).toMatchSnapshot();
    });
});
describe('Toggle component', () => {
    it('render toggle correctly', () => {
        const toggle = (0, react_2.render)(react_1.default.createElement(form_component_1.Toggle, null));
        expect(toggle).toMatchSnapshot();
    });
});
// describe('SelectOption component', () => {
//   it('render selectOption correctly', () => {
//     const select = render(
//       <SelectOption key='test' onChange={value => jest.fn()} value='test' />,
//     );
//     const selectOption = select.getByTestId('SELECT');
//     fireEvent.change(selectOption, {target: {value: 'check'}});
//     userEvent.type(selectOption, 'value');
//     expect(select).toMatchSnapshot();
//   });
// });
describe('MultilineInput component', () => {
    it('render multilineInput correctly', () => {
        const multi = (0, react_2.render)(react_1.default.createElement(form_component_1.MultilineInput, null));
        expect(multi).toMatchSnapshot();
    });
});
// describe('Clock component', () => {
//   it('render clock correctly', () => {
//     const clock = render(
//       <Clock value='2022-02-20' onChange={value => jest.fn()} />,
//     );
//     expect(clock).toMatchSnapshot();
//   });
// });
describe('Label component', () => {
    it('render label correctly', () => {
        const label = (0, react_2.render)(react_1.default.createElement(form_component_1.Label, { htmlFor: "vsdvrf" }));
        expect(label).toMatchSnapshot();
    });
});
describe('InputDate component', () => {
    it('render inputDate correctly', () => {
        const inputDate = (0, react_2.render)(react_1.default.createElement(form_component_1.InputDate, null));
        expect(inputDate).toMatchSnapshot();
    });
});
// describe('InputDateTime component', () => {
//   it('render inputDateTime correctly', () => {
//     const inputDateTime = render(<InputDateTime />);
//     expect(inputDateTime).toMatchSnapshot();
//   });
// });
describe('InputFile component', () => {
    it('render inputFile correctly', () => {
        const inputFile = (0, react_2.render)(react_1.default.createElement(form_component_1.InputFile, null));
        expect(inputFile).toMatchSnapshot();
    });
});
describe('InputRadio component', () => {
    it('render inputRadio correctly', () => {
        const inputRadio = (0, react_2.render)(react_1.default.createElement(form_component_1.InputRadio, null));
        expect(inputRadio).toMatchSnapshot();
    });
});
describe('InputWrapper component', () => {
    it('render inputWrapper correctly', () => {
        const inputWrapper = (0, react_2.render)(react_1.default.createElement(form_component_1.InputWrapper, null));
        expect(inputWrapper).toMatchSnapshot();
    });
});
