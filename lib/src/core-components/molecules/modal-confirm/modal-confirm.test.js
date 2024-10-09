/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { render } from '@core-utils';
import { ModalConfirm } from './modal-confirm.component';
it('render ModalConfirm correctly', () => {
    const modalConfirm = render(React.createElement(ModalConfirm, { visible: true, title: "Confirm", message: "Are you sure delete?", onClick: () => jest.fn(), onClose: () => {
            jest.fn();
        } }));
    expect(modalConfirm).toMatchSnapshot();
});
