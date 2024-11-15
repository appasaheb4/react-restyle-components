import { ModalConfirm } from "./modal-confirm.component";
const meta = {
  title: "Design System/Molecules/ModalConfirm",
  component: ModalConfirm,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: `import { ModalConfirm } from 'react-restyle-components'`,
  },
};
export default meta;
export const Primary = {
  args: {
    visible: true,
    title: "Confirm",
    message: "Are you sure delete?",
    submitTitle: "Submit",
    onClick: () => {},
    onClose: () => {},
  },
};
