import { jsx as _jsx } from "react/jsx-runtime";
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
export const PdfHeading = ({ fontWeight = 'bold', fontSize = 22, fontFamily = 'ArimaRegular', style, children, }) => {
    return (_jsx(Text, { style: {
            fontWeight: fontWeight,
            fontSize: fontSize,
            fontFamily: fontFamily,
            ...style,
        }, children: children }));
};
export const PdfSubHeading = ({ fontWeight = 'bold', fontSize = 20, fontFamily = 'ArimaRegular', style, children, }) => {
    return (_jsx(Text, { style: {
            fontWeight: fontWeight,
            fontSize: fontSize,
            fontFamily: fontFamily,
            ...style,
        }, children: children }));
};
export const PdfMedium = ({ fontWeight = 'medium', fontSize = 16, textAlign = 'left', fontFamily = 'ArimaRegular', style, children, }) => {
    return (_jsx(Text, { style: {
            fontWeight: fontWeight,
            fontSize: fontSize,
            fontFamily: fontFamily,
            textAlign: textAlign,
            ...style,
        }, children: children }));
};
export const PdfRegular = ({ fontWeight = 'normal', fontSize = 12, textAlign = 'left', fontFamily = 'ArimaRegular', style, children, }) => {
    return (_jsx(Text, { style: {
            fontWeight: fontWeight,
            fontSize: fontSize,
            fontFamily: fontFamily,
            textAlign: textAlign,
            ...style,
        }, children: children }));
};
export const PdfSmall = ({ fontSize = 10, fontFamily = 'ArimaRegular', fontWeight = 'normal', textAlign = 'left', lineHeight = 0, fixed = false, style, children, }) => {
    return (_jsx(Text, { style: {
            fontSize: fontSize,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            lineHeight: lineHeight,
            textAlign: textAlign,
            ...style,
        }, fixed: fixed, children: children }));
};
export const PdfPageNumber = ({ style, bottom = 55 }) => {
    return (_jsx(Text, { style: {
            position: 'absolute',
            bottom: bottom,
            right: 14,
            fontSize: 10,
            color: 'black',
            ...style,
        }, render: ({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`, fixed: true }));
};
