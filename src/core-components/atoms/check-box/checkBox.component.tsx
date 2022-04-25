import React from 'react';
import {ReactComponent as UnCheckbox} from '@assets/svg/unCheckbox.svg';
import {ReactComponent as CheckedBox} from '@assets/svg/checkedBox.svg';
interface CheckBoxProps {
  checked?: boolean;
  className?: string;
  disable?: boolean;
  onChange: () => void;
}

export const CheckBox = ({className, checked, onChange}: CheckBoxProps) => {
  const width = 20;
  const hanleClick = () => {
    onChange();
  };
  return (
    <div className={`${className} flex flex-row  mr-2`} onClick={hanleClick}>
      {checked ? (
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
  );
};
