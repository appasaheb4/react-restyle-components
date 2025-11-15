import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './App.css';
import { Tab, Tabs, FormField } from '../src/components';
function App() {
    const [color, setColor] = useState('#aabbcc');
    return (_jsxs("div", { className: "flex flex-col gap-4 p-4", children: [_jsxs(Tabs, { options: [{ title: 'Work History' }, { title: 'Book Order' }], children: [_jsx(Tab, { title: "Work History", children: _jsx("div", { children: "Work" }) }), _jsx(Tab, { title: "Book Order", children: _jsx("div", { children: "Book" }) })] }), _jsx(FormField, { type: "textarea", onChange: (value) => console.log(value) })] }));
}
export default App;
