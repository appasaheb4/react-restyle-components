import React, {useState} from 'react';
import {Icon} from '../..';

interface TabsProps {
  options: Array<{title: string; icon: string}>;
  onSelect: (item: string) => void;
}

export const Tabs = ({options, onSelect}: TabsProps) => {
  const [selected, setSelected] = useState(options[0].title);
  return (
    <div className="flex justify-center">
      <ul className="flex flex-wrap items-center justify-center -mb-px text-sm font-medium text-center text-black cursor-pointer gap-2">
        {options?.map((item, index) => (
          <li key={index} className="bg-red rounded-md">
            <div
              className={`inline-flex items-center justify-center p-3 border-b-2 gap-1 ${
                item.title == selected
                  ? 'text-white font-bold md:text-md  border-primary active'
                  : ' text-gray-200  md:text-md border-transparent'
              }`}
              onClick={() => {
                setSelected(item.title);
                onSelect(item.title);
              }}
            >
              <Icon
                nameIcon={item.icon}
                propsIcon={{
                  color: item.title == selected ? '#ffffff' : '#000000',
                  size: 24,
                }}
              />
              {item.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
