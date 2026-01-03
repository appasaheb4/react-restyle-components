import React from 'react';
import { MasonryProps, MasonryItem, MasonryImageProps } from './types';
export declare const Masonry: <T extends MasonryItem>(props: MasonryProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined;
}) => React.ReactElement;
export declare const MasonryImageComponent: React.ForwardRefExoticComponent<MasonryImageProps & React.RefAttributes<HTMLImageElement>>;
//# sourceMappingURL=Masonry.d.ts.map