import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { PdfSmall } from './pdf-typography.components';
import { PdfBorderView } from './pdf-wrapped-view.components';
const styles = StyleSheet.create({
    table: {
        borderColor: '#000000',
        borderWidth: 1,
        marginHorizontal: 20,
        flexFlow: 1,
    },
    tableRow: {
        flexDirection: 'row',
    },
    headerBg: {
        backgroundColor: '#aaa',
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 1,
    },
    tableCellHeader: {
        margin: 2,
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableCell: {
        margin: 2,
        fontSize: 12,
    },
    textCenter: {
        textAlign: 'center',
    },
});
export const PdfTable = ({ headerFixed = false, fields, data, style, headerStyle, }) => (_jsxs(View, { style: [styles.table, { ...style }], children: [_jsx(View, { style: [styles.tableRow, styles.headerBg, { ...headerStyle }], fixed: headerFixed, children: fields.map((item, index) => (_jsx(View, { style: [{ width: item.width + '%' }], children: _jsx(Text, { style: [styles.tableCellHeader], children: item?.title }) }, index))) }), data?.map((item, index) => (_jsx(View, { style: styles.tableRow, children: Object.entries(item).map((_item, _idx) => (_jsx(PdfBorderView, { style: {
                    width: fields[_idx]?.width + '%',
                    borderStyle: 'solid',
                }, mh: 0, mv: 0, p: 0, bw: 1, borderColor: "#000000", children: typeof _item[1] == 'object' ? (_jsxs(_Fragment, { children: [_jsx(PdfSmall, { style: { textAlign: 'center' }, children: _item[1]?.panelDesc
                                ? `Panel Description : ${_item[1]?.panelDesc} \n`
                                : '' }), _jsx(PdfSmall, { style: { textAlign: 'center' }, children: _item[1]?.panelMethodName
                                ? `Panel Method Name: ${_item[1]?.panelMethodName} \n`
                                : '' }), _jsx(PdfSmall, { style: { textAlign: 'center' }, children: _item[1]?.testMethodName
                                ? `Test Method Name: ${_item[1]?.testMethodName} \n`
                                : '' }), _jsx(PdfSmall, { style: { textAlign: 'center' }, children: _item[1]?.analyteDesc
                                ? `Analyte Description: ${_item[1]?.analyteDesc} \n`
                                : '' }), _jsx(PdfSmall, { style: { textAlign: 'center' }, children: _item[1]?.analyteMethodName
                                ? `Analyte Method Name: ${_item[1]?.analyteMethodName}`
                                : '' })] })) : (_jsx(PdfSmall, { style: { textAlign: 'center' }, children: _item[1] || '' })) }, _idx))) }, index)))] }));
