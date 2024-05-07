import React, {useState} from 'react';
import {UnCheckbox, CheckedBox} from '../../../library/assets/svg';
import {InputWrapper} from '../form/form.component';
interface CheckBoxProps {
  title: string;
  data: Array<any>;
  className?: string;
  disable?: boolean;
  onChange: (flag: boolean) => void;
}

export const CheckBox = ({
  title = 'Banks',
  data = [{title: 'SBI Bank', checked: false}],
  className,
  onChange,
}: CheckBoxProps) => {
  const [list, setList] = useState(data);
  const width = 20;
  const handleClick = () => {
    setList(list?.map((item) => item.checked));
  };
  return (
    <InputWrapper label={title}>
      {list?.map((item, index) => (
        <div
          className={`${className} flex flex-row  items-center `}
          onClick={() => {
            const result = list?.map((e, i) => {
              if (i == index) return {...e, checked: !item.checked};
              else return {...e};
            });
            setList(result);
          }}
          key={index}
        >
          <div className="flex mt-1">
            {item.checked ? (
              <CheckedBox
                width={width}
                height={width}
                fill="#E7503D"
                stroke="E7503D"
              />
            ) : (
              <UnCheckbox width={width} height={width} />
            )}
          </div>

          <span>{item?.title}</span>
        </div>
      ))}
    </InputWrapper>
  );
};
