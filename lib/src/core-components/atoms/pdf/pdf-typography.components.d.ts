import React from 'react';
import { Style } from '@react-pdf/types';
interface PdfTextProps {
    fontWeight?: 'bold' | 'medium' | 'normal';
    fontSize?: number;
    fontFamily?: 'ArimaRegular' | 'ArimaBold' | string;
    textAlign?: 'center' | 'left' | 'right';
    style?: Style | Style[];
    lineHeight?: number;
    bottom?: number;
    fixed?: boolean;
    children?: React.ReactNode;
}
export declare const PdfHeading: ({ fontWeight, fontSize, style, children, }: PdfTextProps) => React.JSX.Element;
export declare const PdfSubHeading: ({ fontWeight, fontSize, style, children, }: PdfTextProps) => React.JSX.Element;
export declare const PdfMedium: ({ fontWeight, fontSize, textAlign, style, children, }: PdfTextProps) => React.JSX.Element;
export declare const PdfRegular: ({ fontWeight, fontSize, textAlign, style, children, }: PdfTextProps) => React.JSX.Element;
export declare const PdfSmall: ({ fontSize, fontWeight, textAlign, lineHeight, fixed, style, children, }: PdfTextProps) => React.JSX.Element;
export declare const PdfPageNumber: ({ style, bottom }: PdfTextProps) => React.JSX.Element;
export {};
