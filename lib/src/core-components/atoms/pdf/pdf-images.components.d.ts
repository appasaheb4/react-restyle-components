import React from 'react';
import { Style } from '@react-pdf/types';
interface PdfImageProps {
    src?: string | any;
    style?: Style | Style[];
    fixed?: boolean;
}
export declare const PdfImage: ({ src, style, }: PdfImageProps) => React.JSX.Element;
export {};
