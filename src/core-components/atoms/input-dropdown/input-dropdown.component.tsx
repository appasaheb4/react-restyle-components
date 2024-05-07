import React, {useState, useEffect, useRef} from 'react';
import {UpArrow, DownArrow} from '../../../library/assets/svg';
interface InputDropdownProps {
  title: string;
  items: Array<string>;
  hasError?: boolean;
  className?: string;
  onChange?: (item: string) => void;
}

export const InputDropdown = ({
  items,
  className,
  hasError,
  title,
  onChange,
}: InputDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          isOpen &&
          isOpen
        )
          setIsOpen(!isOpen);
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div className={`${className} relative`}>
      <div className="flex flex-row items-center ">
        <input
          type="text"
          name="name"
          placeholder={title}
          value={value}
          className=" pt-3 pb-2  w-full px-0 mt-0 bg-transparent border-gray-secondary border-0 border-b appearance-none focus:outline-none focus:ring-0 font-nunitoSansRegular text-md"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          onChange={(event) => onChange && onChange(event.target.value)}
        />
        {!isOpen && (
          <img src={UpArrow as any} className="absolute h-4 w-4 right-0" />
        )}
        {isOpen && (
          <img src={DownArrow as any} className="absolute h-4 w-4 right-0" />
        )}
      </div>
      {isOpen && (
        <div
          className="z-10  w-full absolute text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          ref={wrapperRef}
        >
          <ul className="py-1">
            {items.map((item, index) => (
              <li
                key={index}
                className="block py-2 px-4 text-md  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200   font-nunitoSansRegular"
                onClick={() => {
                  setValue(item);
                  setIsOpen(!isOpen);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {hasError && (
        <span className="text-primaryCharcoal text-4xs" id="error">
          {`${title} is required`}
        </span>
      )}
    </div>
  );
};
