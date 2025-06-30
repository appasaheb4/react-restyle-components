import React, {useState} from 'react';
import './App.css';

import {Tab, Tabs} from './core-components/atoms/tabs/tabs.component';
import {Icon} from './core-components';

function App() {
  const [color, setColor] = useState('#aabbcc');
  return (
    <div className="flex flex-col gap-4 p-4">
      <Tabs options={[{title: 'Work History'}, {title: 'Book Order'}]}>
        <Tab title="Work History">
          <div>Work</div>
        </Tab>
        <Tab title="Book Order">
          <div>Book</div>
        </Tab>
      </Tabs>
      <Icon
        nameIcon="IoSettingsOutline"
        propsIcon={{
          color: '#000000',
          size: 24,
        }}
      />

      {/* <ColorPickerModal color={color} onChange={setColor} />
      <PdfMedium>hi</PdfMedium> */}
    </div>
  );
}

export default App;
