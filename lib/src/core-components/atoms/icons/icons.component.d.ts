import { IconBaseProps } from 'react-icons/lib';
import '../../../tc.module.css';
interface IconProps {
    nameIcon: string;
    propsIcon?: IconBaseProps;
    tooltip?: string;
    isDisable?: boolean;
    onClick?: () => void;
}
export declare const Icon: ({ nameIcon, propsIcon, tooltip, isDisable, onClick, }: IconProps) => JSX.Element;
export {};
