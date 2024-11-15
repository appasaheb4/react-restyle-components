import dayjs from 'dayjs';
import { DatePickerComp } from './date-picker.component';
const meta = {
    title: 'Design System/Atoms/DatePicker',
    component: DatePickerComp,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { DatePickerComp } from 'react-restyle-components'`,
    },
};
export default meta;
export const Primary = {
    args: {
        title: 'Date',
        value: dayjs().format('YYYY-MM-DD'),
        showFormat: 'dd-MM-yyyy',
    },
};
