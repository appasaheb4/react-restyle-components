import React from 'react';
import './App.css';
import { Autocomplete } from './core-components';
function App() {
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("p", null, "New testing"),
            React.createElement(Autocomplete, { value: "", onValueChange: () => { }, options: ['One', 'Two'] }))));
}
export default App;
