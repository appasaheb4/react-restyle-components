// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// Mock the SVG components from the index file
jest.mock('./library/assets/svg', () => ({
    UnCheckbox: (props) => 'UnCheckbox',
    CheckedBox: (props) => 'CheckedBox',
    UpArrow: (props) => 'UpArrow',
}));
