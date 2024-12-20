import React, { useState } from 'react';
import './App.css';
import { Tab, Tabs, Button, } from './core-components';
function App() {
    const [color, setColor] = useState('#aabbcc');
    return (React.createElement("div", { className: "flex flex-col gap-4 p-4" },
        React.createElement(Button, null, "Title"),
        React.createElement(Tabs, { options: [{ title: 'Work History' }, { title: 'Book Order' }] },
            React.createElement(Tab, { title: "Work History" },
                React.createElement("div", null, "hi")),
            React.createElement(Tab, { title: "Book Order" },
                React.createElement("div", null, "hi")))));
}
export default App;
