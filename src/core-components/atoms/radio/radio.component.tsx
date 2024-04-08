import React from 'react';
import {ReactComponent as CheckedRadio} from '@assets/svg/checkedRadio.svg';
import {ReactComponent as UncheckRadio} from '@assets/svg/uncheckRadio.svg';

interface RadioProps {
  checked?: boolean;
  className?: string;
  onChange: () => void;
}

export const Radio = ({className, checked, onChange}: RadioProps) => {
  const width = 20;
  return (
    <div className={`${className} flex flex-row mr-2`} onClick={onChange}>
      {checked ? (
        <CheckedRadio width={width} height={width} />
      ) : (
        <UncheckRadio width={width} height={width} />
      )}
    </div>
  );
};
