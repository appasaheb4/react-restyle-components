import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Autocomplete } from './autocomplete';
const TEST_OPTIONS = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];
test('Render Autocomplete', () => {
    render(_jsx(Autocomplete, { value: "", onValueChange: () => { }, options: TEST_OPTIONS }));
    expect(screen.getByRole('input')).toBeInTheDocument();
    // expect(screen.getByRole('list')).toBeInTheDocument();
});
test('Autocomplete with empty list', () => {
    render(_jsx(Autocomplete, { value: "", onValueChange: () => { }, options: [] }));
    expect(screen.getByRole('input')).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
});
test('Autocomplete list arrow navigation', () => {
    const onValueChange = jest.fn();
    window.HTMLElement.prototype.scroll = function () { };
    render(_jsx(Autocomplete, { value: "", onValueChange: onValueChange, options: TEST_OPTIONS }));
    expect(onValueChange).toHaveBeenCalledWith('ONE');
    fireEvent.keyDown(screen.getByRole('input'), { keyCode: 40 }); //down
    expect(onValueChange).toHaveBeenCalledWith('TWO');
    // expect(screen.getByText('TWO')).toHaveClass('active-option');
    // expect(screen.getByText('THREE')).toBeInTheDocument();
    fireEvent.keyDown(screen.getByRole('input'), { keyCode: 40 }); //down
    expect(onValueChange).toHaveBeenCalledWith('THREE');
    // expect(screen.getByText('THREE')).toHaveClass('active-option');
});
// test('Autocomplete list option click', () => {
//   const onValueChange = jest.fn();
//   render(
//     <Autocomplete
//       value=""
//       onValueChange={onValueChange}
//       options={TEST_OPTIONS}
//     />
//   );
//   fireEvent.click(screen.getByText('FOUR'));
//   expect(screen.getByRole('input')).toHaveValue('FOUR');
//   expect(onValueChange).toHaveBeenCalledWith('FOUR');
//   expect(screen.queryByRole('list')).not.toBeInTheDocument();
// });
test('Autocomplete search', () => {
    const onValueChange = jest.fn();
    render(_jsx(Autocomplete, { value: "", onValueChange: onValueChange, options: TEST_OPTIONS }));
    fireEvent.change(screen.getByRole('input'), { target: { value: 'f' } });
    for (let option of TEST_OPTIONS) {
        if (option.toLowerCase().indexOf('f') > -1) {
            expect(screen.getAllByRole('listitem')).toHaveLength(2);
            expect(screen.queryByText(option)).toBeInTheDocument();
        }
        else {
            expect(screen.queryByText(option)).not.toBeInTheDocument();
        }
    }
});
// test('Autocomplete search default value', () => {
//   const onValueChange = jest.fn();
//   render(
//     <Autocomplete
//       value="TWO"
//       onValueChange={onValueChange}
//       options={TEST_OPTIONS}
//     />
//   );
//   expect(screen.getByText('TWO')).toHaveClass('active-option');
// });
test('Autocomplete search no result', () => {
    const onValueChange = jest.fn();
    render(_jsx(Autocomplete, { value: "", onValueChange: onValueChange, options: TEST_OPTIONS }));
    fireEvent.change(screen.getByRole('input'), { target: { value: 'hello' } });
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    // expect(screen.getByText('No match')).toBeInTheDocument();
});
test('Autocomplete with value not in list', () => {
    render(_jsx(Autocomplete, { value: "xxx", onValueChange: () => { }, options: TEST_OPTIONS }));
    expect(screen.getByRole('input')).toBeInTheDocument();
    // expect(screen.getByText('ONE')).toHaveClass('active-option');
});
