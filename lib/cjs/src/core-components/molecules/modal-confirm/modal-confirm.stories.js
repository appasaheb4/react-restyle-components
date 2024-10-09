"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const modal_confirm_component_1 = require("./modal-confirm.component");
const meta = {
    title: 'Design System/Molecules/ModalConfirm',
    component: modal_confirm_component_1.ModalConfirm,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { ModalConfirm } from 'react-restyle-components'`,
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        visible: true,
        title: 'Confirm',
        message: 'Are you sure delete?',
        submitTitle: 'Submit',
        onClick: () => { },
        onClose: () => { },
    },
};
