import React from 'react';
import './App.css';
import { Autocomplete } from './core-components';
function App() {
    return (React.createElement("div", null,
        React.createElement("p", { style: { margin: '0 0 10px 0' } }, "Autocomplete Comp."),
        React.createElement(Autocomplete, { value: "", onValueChange: () => { }, options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'] })));
}
export default App;
