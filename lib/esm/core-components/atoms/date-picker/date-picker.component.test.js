/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { render } from '@core-utils';
import { DatePickerComp } from './date-picker.component';
import dayjs from 'dayjs';
it('render XB_DatePicker correctly', () => {
    const datepicker = render(React.createElement(DatePickerComp, { className: "mt-6", value: dayjs().format('YYYY-MM-DD'), showFormat: 'dd-MM-yyyy' }));
    expect(datepicker).toMatchSnapshot();
});
//# sourceMappingURL=date-picker.component.test.js.map