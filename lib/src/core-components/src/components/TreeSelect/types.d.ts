import React, { CSSProperties } from 'react';
/** Tree node data structure */
export interface TreeSelectNode {
    /** Unique identifier */
    key?: string;
    /** Display value (used for selection) */
    value: string;
    /** Display label/title */
    title: React.ReactNode;
    /** Child nodes */
    children?: TreeSelectNode[];
    /** Whether node is disabled */
    disabled?: boolean;
    /** Whether checkbox is disabled (when checkable) */
    disableCheckbox?: boolean;
    /** Whether node is a leaf (no children) */
    isLeaf?: boolean;
    /** Whether node is selectable */
    selectable?: boolean;
    /** Custom icon for the node */
    icon?: React.ReactNode;
    /** Whether node has checkbox (when tree is checkable) */
    checkable?: boolean;
    /** Additional custom data */
    [key: string]: any;
}
/** Selection mode */
export type TreeSelectMode = 'single' | 'multiple' | 'checkable';
/** Dropdown placement */
export type TreeSelectPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
/** Component variants */
export type TreeSelectVariant = 'outlined' | 'borderless' | 'filled' | 'underlined';
/** Component sizes */
export type TreeSelectSize = 'small' | 'medium' | 'large';
/** Field name mapping */
export interface TreeSelectFieldNames {
    label?: string;
    value?: string;
    children?: string;
}
/** Custom class names */
export interface TreeSelectClassNames {
    /** Root container */
    root?: string;
    /** Select input container */
    selector?: string;
    /** Prefix element */
    prefix?: string;
    /** Input element */
    input?: string;
    /** Placeholder */
    placeholder?: string;
    /** Suffix element */
    suffix?: string;
    /** Selected tags (multiple mode) */
    tag?: string;
    /** Dropdown popup */
    popup?: string;
    /** Tree container */
    tree?: string;
    /** Tree node */
    node?: string;
    /** Node title */
    nodeTitle?: string;
    /** Node checkbox */
    nodeCheckbox?: string;
    /** Search input */
    search?: string;
}
/** Custom styles */
export interface TreeSelectStyles {
    root?: CSSProperties;
    selector?: CSSProperties;
    prefix?: CSSProperties;
    input?: CSSProperties;
    placeholder?: CSSProperties;
    suffix?: CSSProperties;
    tag?: CSSProperties;
    popup?: CSSProperties;
    tree?: CSSProperties;
    node?: CSSProperties;
    nodeTitle?: CSSProperties;
    nodeCheckbox?: CSSProperties;
    search?: CSSProperties;
}
/** Load data function for async loading */
export type TreeSelectLoadData = (node: TreeSelectNode) => Promise<TreeSelectNode[]>;
export interface TreeSelectProps {
    /** Tree data */
    treeData: TreeSelectNode[];
    /** Current selected value(s) */
    value?: string | string[];
    /** Default selected value(s) */
    defaultValue?: string | string[];
    /** Selection mode */
    mode?: TreeSelectMode;
    /** Placeholder text */
    placeholder?: string;
    /** Whether component is disabled */
    disabled?: boolean;
    /** Whether to show search input */
    showSearch?: boolean;
    /** Custom filter function */
    filterTreeNode?: (inputValue: string, node: TreeSelectNode) => boolean;
    /** Property to use for filtering */
    treeNodeFilterProp?: string;
    /** Whether to show tree lines */
    treeLine?: boolean | {
        showLeafIcon?: boolean | React.ReactNode;
    };
    /** Whether to show tree icons */
    showTreeIcon?: boolean;
    /** Whether to show checkboxes */
    checkable?: boolean;
    /** Check strictly (parent-child not associated) */
    checkStrictly?: boolean;
    /** Default expanded keys */
    defaultExpandedKeys?: string[];
    /** Expanded keys (controlled) */
    expandedKeys?: string[];
    /** Default expand all */
    defaultExpandAll?: boolean;
    /** Async load data */
    loadData?: TreeSelectLoadData;
    /** Allow clear button */
    allowClear?: boolean;
    /** Auto clear search on select */
    autoClearSearchValue?: boolean;
    /** Max tag count in multiple mode */
    maxTagCount?: number | 'responsive';
    /** Max tag placeholder */
    maxTagPlaceholder?: React.ReactNode | ((omittedValues: string[]) => React.ReactNode);
    /** Dropdown placement */
    placement?: TreeSelectPlacement;
    /** Dropdown open state (controlled) */
    open?: boolean;
    /** Default dropdown open state */
    defaultOpen?: boolean;
    /** Component variant */
    variant?: TreeSelectVariant;
    /** Component size */
    size?: TreeSelectSize;
    /** Prefix icon/element */
    prefix?: React.ReactNode;
    /** Suffix icon (replaces default arrow) */
    suffixIcon?: React.ReactNode;
    /** Clear icon */
    clearIcon?: React.ReactNode;
    /** Dropdown max height */
    listHeight?: number;
    /** Whether popup matches selector width */
    popupMatchSelectWidth?: boolean | number;
    /** Popup container */
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    /** Custom classNames */
    classNames?: TreeSelectClassNames;
    /** Custom styles */
    styles?: TreeSelectStyles;
    /** Additional root className */
    className?: string;
    /** Additional root style */
    style?: CSSProperties;
    /** Status */
    status?: 'error' | 'warning';
    /** Field name mapping */
    fieldNames?: TreeSelectFieldNames;
    /** Virtual scroll (for large lists) */
    virtual?: boolean;
    /** Dropdown render customization */
    dropdownRender?: (menu: React.ReactNode) => React.ReactNode;
    /** Tab index */
    tabIndex?: number;
    /** Auto focus */
    autoFocus?: boolean;
    /** ARIA label */
    'aria-label'?: string;
    /** ARIA labelledby */
    'aria-labelledby'?: string;
    /** Called when selection changes */
    onChange?: (value: string | string[], label: React.ReactNode | React.ReactNode[], extra: {
        preValue?: string | string[];
        triggerValue?: string;
        triggerNode?: TreeSelectNode;
        allCheckedNodes?: TreeSelectNode[];
    }) => void;
    /** Called when a node is selected */
    onSelect?: (value: string, node: TreeSelectNode, extra: {
        selected: boolean;
    }) => void;
    /** Called when search input changes */
    onSearch?: (value: string) => void;
    /** Called when dropdown visibility changes */
    onDropdownVisibleChange?: (open: boolean) => void;
    /** Called when tree expands */
    onTreeExpand?: (expandedKeys: string[]) => void;
    /** Called when popup scrolls */
    onPopupScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
    /** Called on focus */
    onFocus?: (event: React.FocusEvent) => void;
    /** Called on blur */
    onBlur?: (event: React.FocusEvent) => void;
    /** Called on clear */
    onClear?: () => void;
}
//# sourceMappingURL=types.d.ts.map