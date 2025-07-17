import { Style } from '@react-pdf/types';
interface PdfTableProps {
    style?: Style;
    headerStyle?: Style;
    headerFixed?: boolean;
    fields: Array<any>;
    data: Array<any>;
}
export declare const PdfTable: ({ headerFixed, fields, data, style, headerStyle, }: PdfTableProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=pdf-table.components.d.ts.map