import React, {useState} from 'react';
import {CheckedRadio, UncheckRadio} from '../../../library/assets/svg';
import {InputWrapper} from '../form/form.component';

import '../../../../tc.css';
interface RadioProps {
  title: string;
  data: Array<any>;
  className?: string;
  onChange: (item) => void;
}

export const Radio = ({
  title = 'Source',
  data = [],
  className,
  onChange,
}: RadioProps) => {
  const [list, setList] = useState<any>(data);
  const width = 20;
  return (
    <>
      <InputWrapper label={title}>
        {list?.map((item, index) => (
          <div
            className={`${className} flex items-center mb-1`}
            onClick={() => {
              const result = list?.map((e, i) => {
                if (i == index) return {...e, checked: true};
                else return {...e, checked: false};
              });
              setList(result);
              onChange(result?.find((item) => item.checked));
            }}
            key={index}
          >
            <div className="flex flex-row gap-1 items-center">
              {item.checked ? (
                <CheckedRadio width={width} height={width} />
              ) : (
                <UncheckRadio width={width} height={width} />
              )}
              <span className="text-4xs">{item?.title}</span>
            </div>
          </div>
        ))}
      </InputWrapper>
    </>
  );
};
