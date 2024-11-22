import React from 'react';
import { Style } from '@react-pdf/types';
interface PdfViewProps {
    mh?: number;
    mt?: number;
    mv?: number;
    p?: number;
    borderColor?: string;
    bg?: string;
    bw?: number;
    height?: string | number;
    alignItems?: 'flex-end' | 'flex-start' | 'center';
    flexDirection?: 'row' | 'column';
    fixed?: boolean;
    isBreak?: boolean;
    isWrap?: boolean;
    style?: Style | Style[] | any;
    children?: React.ReactNode;
}
export declare const PdfView: ({ mh, p, flexDirection, style, fixed, isBreak, alignItems, mt, isWrap, children, }: PdfViewProps) => React.JSX.Element;
export declare const PdfBorderView: ({ mh, mv, p, borderColor, bw, style, flexDirection, fixed, isBreak, children, }: PdfViewProps) => React.JSX.Element;
interface PdfHeaderProps {
    bg?: string;
    p?: number;
    alignItems?: React.CSSProperties['alignItems'] | any;
    fixed?: boolean;
    style?: React.CSSProperties | any;
    children?: React.ReactNode;
}
export declare const PdfHeader: ({ bg, p, alignItems, fixed, style, children, }: PdfHeaderProps) => React.JSX.Element;
export declare const PdfSubHeader: ({ bg, p, alignItems, fixed, style, children, }: PdfViewProps) => React.JSX.Element;
interface PdfFooterViewProps {
    bottom?: number;
    left?: number;
    right?: number;
    bg?: string;
    p?: number;
    alignItems?: React.CSSProperties['alignItems'];
    fixed?: boolean;
    height?: string | number;
    style?: React.CSSProperties | any;
    children: React.ReactNode;
}
export declare const PdfFooterView: ({ bottom, left, right, bg, p, alignItems, fixed, height, style, children, }: PdfFooterViewProps) => React.JSX.Element;
interface GridProps {
    cols?: number;
    bg?: 'transparent' | string;
    style?: Style | Style[];
    children?: React.ReactNode;
}
export declare const PdfGrid: React.FunctionComponent<GridProps>;
export {};
