import React, { useState } from 'react';
import './App.css';
import { ColorPickerModal, PdfMedium, Tab, Tabs, } from './core-components';
function App() {
    const [color, setColor] = useState('#aabbcc');
    return (React.createElement("div", { className: "flex flex-col gap-4 p-4" },
        React.createElement("p", { style: { margin: '0 0 10px 0' } }, "Autocomplete Comp."),
        React.createElement(Tabs, { options: [
                { title: 'Work History', icon: 'FaHistory' },
                { title: 'Book Order', icon: 'FaBook' },
                { title: 'Make Frame', icon: 'MdFilterFrames' },
            ], onSelect: (item) => {
                console.log({ item });
            } },
            React.createElement(Tab, { label: "Work History" },
                React.createElement("span", null, "HI")),
            React.createElement(Tab, { label: "Book Order" },
                React.createElement("span", null, "Welcome"))),
        React.createElement(ColorPickerModal, { color: color, onChange: setColor }),
        React.createElement(PdfMedium, null, "hi")));
}
export default App;
