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
export declare const PdfHeading: ({ fontWeight, fontSize, fontFamily, style, children, }: PdfTextProps) => import("react/jsx-runtime").JSX.Element;
export declare const PdfSubHeading: ({ fontWeight, fontSize, fontFamily, style, children, }: PdfTextProps) => import("react/jsx-runtime").JSX.Element;
export declare const PdfMedium: ({ fontWeight, fontSize, textAlign, fontFamily, style, children, }: PdfTextProps) => import("react/jsx-runtime").JSX.Element;
export declare const PdfRegular: ({ fontWeight, fontSize, textAlign, fontFamily, style, children, }: PdfTextProps) => import("react/jsx-runtime").JSX.Element;
export declare const PdfSmall: ({ fontSize, fontFamily, fontWeight, textAlign, lineHeight, fixed, style, children, }: PdfTextProps) => import("react/jsx-runtime").JSX.Element;
export declare const PdfPageNumber: ({ style, bottom }: PdfTextProps) => import("react/jsx-runtime").JSX.Element;
export {};
