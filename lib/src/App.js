import React, { useState } from 'react';
import './App.css';
import { Button, } from './core-components';
function App() {
    const [color, setColor] = useState('#aabbcc');
    return (React.createElement("div", { className: "flex flex-col gap-4 p-4" },
        React.createElement(Button, null, "Title")));
}
export default App;
