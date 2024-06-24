import React, {useState, forwardRef} from 'react';
import '../../../../tc.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {DatePickerSvg} from '../../../library/assets/svg';
import dayjs from 'dayjs';
import {InputWrapper} from '../form/form.component';

interface DatePickerProps {
  title: string;
  value?: string;
  className?: string;
  disable?: boolean;
  showFormat?: string;
  placeholder?: string;
}

export const DatePickerComp = ({
  title = 'Title',
  className,
  disable,
  value,
  showFormat = 'yyyy-MM-dd',
  placeholder = 'Select Date',
}: DatePickerProps) => {
  const [pickedDate, setPickedDate] = useState(value && dayjs(value).toDate());

  const CustomInput = forwardRef((props: any, ref: any) => {
    return (
      <div
        onClick={!disable && props.onClick}
        ref={ref}
        className=" border-gray-light place-items-center  border rounded-md px-2 flex "
      >
        <label className="mr-3 font-nunitoSansRegular text-primaryCharcoal text-lg">
          {props.value || props.placeholder}
        </label>
        <DatePickerSvg width={15} height={15} />
      </div>
    );
  });
  CustomInput.displayName = 'CustomInput';

  const handleChanges = (date) => {
    setPickedDate(date);
  };

  return (
    <InputWrapper label={title}>
      <div className={`${className} flex zIndex-999`}>
        <DatePicker
          selected={pickedDate || new Date()}
          dateFormat={showFormat}
          placeholder={placeholder}
          onChange={handleChanges}
          customInput={<CustomInput />}
        />
      </div>
    </InputWrapper>
  );
};
