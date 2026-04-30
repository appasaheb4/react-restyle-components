import React from 'react';
import type { TooltipProps } from '../../Tooltip';
/**
 * One selectable row in the {@link ButtonGroupList} popover.
 */
export interface ButtonGroupListOption<T extends string = string> {
    value: T;
    label: string;
    /** Icon name for the row (package Icon set). */
    nameIcon: string;
}
export interface ButtonGroupListProps<T extends string = string> {
    options: readonly ButtonGroupListOption<T>[];
    value: T;
    onChange: (value: T) => void;
    /** Icon on the square trigger button. */
    triggerIcon?: string;
    triggerIconProps?: {
        size?: number;
        color?: string;
    };
    /**
     * Tooltip on the trigger; omit for no tooltip.
     * Passed to {@link Tooltip} `content`.
     */
    tooltipContent?: React.ReactNode;
    /** Extra props for the trigger tooltip (position, delay, etc.). */
    tooltipProps?: Omit<TooltipProps, 'children' | 'content'>;
    /** Called when the square trigger is clicked (before open/close toggle). */
    onBaseClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    /** Merged onto the root wrapper. */
    className?: string;
    style?: React.CSSProperties;
    /** Merged onto the trigger button after built-in classes. */
    triggerClassName?: string;
    triggerButtonStyle?: React.CSSProperties;
    /** Merged onto the floating listbox panel. */
    dropdownClassName?: string;
    dropdownStyle?: React.CSSProperties;
    /** `aria-label` on the trigger. */
    triggerAriaLabel?: string;
    /** `aria-label` on the listbox. */
    listboxAriaLabel?: string;
}
export declare function ButtonGroupList<T extends string = string>({ options, value, onChange, triggerIcon, triggerIconProps, tooltipContent, tooltipProps, onBaseClick, disabled, className, style, triggerClassName, triggerButtonStyle, dropdownClassName, dropdownStyle, triggerAriaLabel, listboxAriaLabel, }: ButtonGroupListProps<T>): import("react/jsx-runtime").JSX.Element;
export type ButtonGuideListValue = 'noneGuide' | 'operationalGuide' | 'technicalGuide';
export declare const LIBRARY_GUIDE_OPTIONS: readonly ButtonGroupListOption<ButtonGuideListValue>[];
export type ButtonGuideListProps = Omit<ButtonGroupListProps<ButtonGuideListValue>, 'options'> & {
    options?: readonly ButtonGroupListOption<ButtonGuideListValue>[];
};
export declare function ButtonGuideList({ options, tooltipContent, ...rest }: ButtonGuideListProps): import("react/jsx-runtime").JSX.Element;
