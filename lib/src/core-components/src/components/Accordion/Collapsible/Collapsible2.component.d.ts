import React, { CSSProperties } from 'react';
export interface CollapsibleGroupProps {
    children?: React.ReactNode;
    /** Index (0-based) of the panel that should be open initially */
    defaultOpenIndex?: number;
    /** Wrapper element style */
    style?: CSSProperties;
    /** Wrapper element className */
    className?: string;
    /** Gap between panels (default 12px) */
    gap?: number | string;
}
/**
 * Wrap `<Collapsible>` elements with `<CollapsibleGroup>` to get accordion
 * behaviour: when one panel opens the others automatically close.
 *
 * ```tsx
 * <CollapsibleGroup defaultOpenIndex={0}>
 *   <Collapsible label="Section A">…</Collapsible>
 *   <Collapsible label="Section B">…</Collapsible>
 *   <Collapsible label="Section C">…</Collapsible>
 * </CollapsibleGroup>
 * ```
 */
export declare const CollapsibleGroup: ({ children, defaultOpenIndex, style, className, gap, }: CollapsibleGroupProps) => import("react/jsx-runtime").JSX.Element;
export interface CollapsibleClassNames {
    /** Custom className for the root container */
    container?: string;
    /** Custom className for the toggle button */
    button?: string;
    /** Custom className for the content area */
    content?: string;
    /** Custom className for the icon wrapper */
    iconWrapper?: string;
    /** Custom className for the leading header icon wrapper */
    headerIcon?: string;
    /** Custom className for the header text block (label + subtitle) */
    headerText?: string;
    /** Custom className for the subtitle element */
    subtitle?: string;
}
export interface CollapsibleHeader {
    /** Leading icon shown before the label text */
    icon?: React.ReactNode;
    /** Main title — overrides the top-level `label` prop when provided */
    label?: string | React.ReactNode;
    /** Secondary line shown below the label */
    subtitle?: string | React.ReactNode;
}
export interface CollapsibleStyles {
    /** Custom style for the root container */
    container?: CSSProperties;
    /** Custom style for the toggle button */
    button?: CSSProperties;
    /** Custom style for the content area */
    content?: CSSProperties;
}
export type CollapsibleVariant = 'default' | 'bordered' | 'elevated' | 'minimal' | 'glass';
interface CollapsibleProps {
    /**
     * Simple label — accepts a plain string, any ReactNode, **or a render
     * function** that receives the current open state so you can react to it:
     *
     * ```tsx
     * label={(isOpen) => (
     *   <div>
     *     <MyIcon color={isOpen ? 'black' : 'gray'} />
     *     <span>Title</span>
     *     <ChevronIcon direction={isOpen ? 'up' : 'down'} />
     *   </div>
     * )}
     * hideIcon  // suppress the built-in chevron when you supply your own
     * ```
     *
     * Use `header` instead when you want the structured icon/label/subtitle
     * layout without writing JSX yourself.
     */
    label?: string | React.ReactNode | ((isOpen: boolean) => React.ReactNode);
    /**
     * Structured header with optional leading icon, label, and subtitle.
     * When provided, `label` is used as a fallback title only if
     * `header.label` is omitted.
     */
    header?: CollapsibleHeader;
    labelClassName?: string;
    className?: string;
    /** Custom classNames for component parts */
    classNames?: CollapsibleClassNames;
    /** Custom inline styles for component parts */
    styles?: CollapsibleStyles;
    /** Visual variant style */
    variant?: CollapsibleVariant;
    /** Animation duration in milliseconds */
    animationDuration?: number;
    /** Initially expanded state */
    defaultOpen?: boolean;
    /** Controlled open state */
    isOpen?: boolean;
    /** Hide the chevron icon */
    hideIcon?: boolean;
    /** Custom icon element that replaces the default chevron */
    icon?: React.ReactNode;
    onExpand?: (label: string) => void;
    onCollapse?: (label: string) => void;
    children?: React.ReactNode;
    /**
     * Injected automatically by CollapsibleGroup — do not set manually.
     * @internal
     */
    groupIndex?: number;
}
export declare const Collapsible: ({ label, header, labelClassName, className, classNames, styles, variant, animationDuration, defaultOpen, isOpen: controlledOpen, hideIcon, icon, onExpand, onCollapse, children, groupIndex, }: CollapsibleProps) => import("react/jsx-runtime").JSX.Element;
export {};
