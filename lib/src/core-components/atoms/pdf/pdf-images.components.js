import React from 'react';
import { Image } from '@react-pdf/renderer';
export const PdfImage = ({ src = 'https://picsum.photos/200/300', style, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Image, { style: {
                ...style,
            }, src: src })));
};
