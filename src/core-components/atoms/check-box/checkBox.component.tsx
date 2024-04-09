import React from 'react';
import {ReactComponent as UnCheckbox} from '../../../library/assets/svg/unCheckbox.svg';
import {ReactComponent as CheckedBox} from '../../../library/assets/svg/checkedBox.svg';
interface CheckBoxProps {
  className?: string;
  checked?: boolean;
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
