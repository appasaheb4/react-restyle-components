import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './App.css';
import { Autocomplete } from './components';
function App() {
    const [color, setColor] = useState('#aabbcc');
    return (_jsxs("div", { className: "flex flex-col gap-4 p-4", children: [_jsx("span", { children: " Root Component" }), _jsx(Autocomplete, { options: ['Headlines', 'Menu'], onValueChange: () => { }, onSelect: (category) => {
                    console.log({ category });
                } })] }));
}
export default App;
