import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Image } from '@react-pdf/renderer';
export const PdfImage = ({ src = 'https://picsum.photos/200/300', style, }) => {
    return (_jsx(_Fragment, { children: _jsx(Image, { style: {
                ...style,
            }, src: src }) }));
};
