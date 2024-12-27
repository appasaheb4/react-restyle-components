import React from 'react';
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
export const PdfTable = ({ headerFixed = false, fields, data, style, headerStyle, }) => (React.createElement(View, { style: [styles.table, { ...style }] },
    React.createElement(View, { style: [styles.tableRow, styles.headerBg, { ...headerStyle }], fixed: headerFixed }, fields.map((item, index) => (React.createElement(View, { key: index, style: [{ width: item.width + '%' }] },
        React.createElement(Text, { style: [styles.tableCellHeader] }, item?.title))))),
    data?.map((item, index) => (React.createElement(View, { key: index, style: styles.tableRow }, Object.entries(item).map((_item, _idx) => (React.createElement(PdfBorderView, { key: _idx, style: {
            width: fields[_idx]?.width + '%',
            borderStyle: 'solid',
        }, mh: 0, mv: 0, p: 0, bw: 1, borderColor: "#000000" }, typeof _item[1] == 'object' ? (React.createElement(React.Fragment, null,
        React.createElement(PdfSmall, { style: { textAlign: 'center' } }, _item[1]?.panelDesc
            ? `Panel Description : ${_item[1]?.panelDesc} \n`
            : ''),
        React.createElement(PdfSmall, { style: { textAlign: 'center' } }, _item[1]?.panelMethodName
            ? `Panel Method Name: ${_item[1]?.panelMethodName} \n`
            : ''),
        React.createElement(PdfSmall, { style: { textAlign: 'center' } }, _item[1]?.testMethodName
            ? `Test Method Name: ${_item[1]?.testMethodName} \n`
            : ''),
        React.createElement(PdfSmall, { style: { textAlign: 'center' } }, _item[1]?.analyteDesc
            ? `Analyte Description: ${_item[1]?.analyteDesc} \n`
            : ''),
        React.createElement(PdfSmall, { style: { textAlign: 'center' } }, _item[1]?.analyteMethodName
            ? `Analyte Method Name: ${_item[1]?.analyteMethodName}`
            : ''))) : (React.createElement(PdfSmall, { style: { textAlign: 'center' } }, _item[1] || ''))))))))));
