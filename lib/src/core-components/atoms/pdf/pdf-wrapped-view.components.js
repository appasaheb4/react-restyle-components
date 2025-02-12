import { jsx as _jsx } from "react/jsx-runtime";
import { View } from '@react-pdf/renderer';
export const PdfView = ({ mh = 20, p = 2, flexDirection = 'column', style, fixed = false, isBreak = false, alignItems, mt, isWrap = true, children, }) => {
    return (_jsx(View, { break: isBreak, style: {
            marginHorizontal: mh,
            marginTop: mt,
            padding: p,
            flexDirection: flexDirection,
            alignItems: alignItems,
            ...style,
        }, fixed: fixed, wrap: isWrap, children: children }));
};
export const PdfBorderView = ({ mh = 20, mv = 50, p = 2, borderColor = 'gray', bw = 2, style, flexDirection = 'column', fixed = false, isBreak = false, children, }) => {
    return (_jsx(View, { break: isBreak, style: {
            flexDirection: flexDirection,
            marginHorizontal: mh,
            marginVertical: mv,
            padding: p,
            borderColor: borderColor,
            borderWidth: bw,
            ...style,
        }, fixed: fixed, children: children }));
};
export const PdfHeader = ({ bg = 'orange', p = 10, alignItems = 'flex-start', fixed = false, style, children, }) => {
    return (_jsx(View, { style: {
            backgroundColor: bg,
            alignItems: alignItems,
            padding: p,
            ...style,
        }, fixed: fixed, children: children }));
};
export const PdfSubHeader = ({ bg = 'yellow', p = 4, alignItems = 'flex-end', fixed = false, style, children, }) => {
    return (_jsx(View, { style: {
            backgroundColor: bg,
            alignItems: alignItems,
            padding: p,
            ...style,
        }, fixed: fixed, children: children }));
};
export const PdfFooterView = ({ bottom = 0, left = 0, right = 0, bg = 'orange', p = 10, alignItems = 'center', fixed = false, height = '100%', style, children, }) => {
    return (_jsx(View, { style: [
            { position: 'absolute', bottom, left, right, height },
            { backgroundColor: bg, padding: p, alignItems: alignItems, ...style },
        ], fixed: fixed, children: children }));
};
export const PdfGrid = ({ cols = 1, bg = 'white', style, children, }) => (_jsx(View, { style: {
        width: `${100 / cols}%`,
        backgroundColor: bg,
        ...style,
    }, children: children }));
