import React, { useState } from 'react';
import './App.css';
import { ColorPickerModal, PdfMedium, } from './core-components';
function App() {
    const [color, setColor] = useState('#aabbcc');
    return (React.createElement("div", { className: "flex flex-col gap-4 p-4" },
        React.createElement("p", { style: { margin: '0 0 10px 0' } }, "Autocomplete Comp."),
        React.createElement(ColorPickerModal, { color: color, onChange: setColor }),
        React.createElement(PdfMedium, null, "hi")));
}
export default App;
