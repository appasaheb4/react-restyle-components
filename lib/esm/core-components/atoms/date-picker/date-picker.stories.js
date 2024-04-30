import dayjs from "dayjs";
import { DatePickerComp } from "./date-picker.component";
const meta = {
  title: "Design System/Atoms/DatePicker",
  component: DatePickerComp,
  tags: ["autodocs"],
};
export default meta;
export const Primary = {
  args: {
    className: "mt-6",
    value: dayjs().format("YYYY-MM-DD"),
    showFormat: "dd-MM-yyyy",
  },
};
//# sourceMappingURL=date-picker.stories.js.map
