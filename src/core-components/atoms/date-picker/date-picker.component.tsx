import React, {useState, forwardRef} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {ReactComponent as DatePickerSvg} from '../../../library/assets/svg/datePicker.svg';
import dayjs from 'dayjs';

interface DatePickerProps {
  value?: string;
  className?: string;
  disable?: boolean;
  showFormat?: string;
  placeholder?: string;
}

export const DatePickerComp = ({
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
        className=" border-gray-light place-items-center  border rounded-md px-2 flex flex-wrap "
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
    <div className={`${className}   items-center flex justify-start `}>
      <div className="flex-wrap">
        <DatePicker
          selected={pickedDate || new Date()}
          dateFormat={showFormat}
          placeholder={placeholder}
          onChange={handleChanges}
          customInput={<CustomInput />}
        />
      </div>
      {/* */}
    </div>
  );
};
