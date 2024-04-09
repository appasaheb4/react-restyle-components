import React from 'react';
import {CheckedRadio, UncheckRadio} from '../../../library/assets/svg';

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
