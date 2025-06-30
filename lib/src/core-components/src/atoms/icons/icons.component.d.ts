/// <reference types="react" />
import { IconBaseProps } from 'react-icons/lib';
interface IconProps {
    nameIcon: string;
    propsIcon?: IconBaseProps;
    tooltip?: string;
    isDisable?: boolean;
    onClick?: () => void;
}
export declare const Icon: ({ nameIcon, propsIcon, tooltip, isDisable, onClick, }: IconProps) => JSX.Element;
export {};
//# sourceMappingURL=icons.component.d.ts.map