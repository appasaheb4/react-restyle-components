import React from 'react';
import { Text, Font } from '@react-pdf/renderer';
Font.register({
    family: 'ArimaBold',
    fonts: [
        {
            src: '../../../library/assets/fonts/arima/arima-bold.ttf',
            fontStyle: 'normal',
            fontWeight: 'bold',
        },
    ],
});
Font.register({
    family: 'ArimaRegular',
    src: '../../../library/assets/fonts/arima/arima-regular.ttf',
});
export const PdfHeading = ({ fontWeight = 'bold', fontSize = 22, style, children, }) => {
    return (React.createElement(Text, { style: {
            fontWeight: fontWeight,
            fontSize: fontSize,
            ...style,
        } }, children));
};
export const PdfSubHeading = ({ fontWeight = 'bold', fontSize = 20, style, children, }) => {
    return (React.createElement(Text, { style: {
            fontWeight: fontWeight,
            fontSize: fontSize,
            ...style,
        } }, children));
};
export const PdfMedium = ({ fontWeight = 'medium', fontSize = 16, textAlign = 'left', style, children, }) => {
    return (React.createElement(Text, { style: {
            fontWeight: fontWeight,
            fontSize: fontSize,
            textAlign: textAlign,
            ...style,
        } }, children));
};
export const PdfRegular = ({ fontWeight = 'normal', fontSize = 12, textAlign = 'left', style, children, }) => {
    return (React.createElement(Text, { style: {
            fontWeight: fontWeight,
            fontSize: fontSize,
            textAlign: textAlign,
            ...style,
        } }, children));
};
export const PdfSmall = ({ fontSize = 10, fontWeight = 'normal', textAlign = 'left', lineHeight = 0, fixed = false, style, children, }) => {
    return (React.createElement(Text, { style: {
            fontSize: fontSize,
            fontWeight: fontWeight,
            lineHeight: lineHeight,
            textAlign: textAlign,
            ...style,
        }, fixed: fixed }, children));
};
export const PdfPageNumber = ({ style, bottom = 55 }) => {
    return (React.createElement(Text, { style: {
            position: 'absolute',
            bottom: bottom,
            right: 14,
            fontSize: 10,
            color: 'black',
            ...style,
        }, render: ({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`, fixed: true }));
};
