/// <reference types="react" />
import { TreeSelectNode, TreeSelectFieldNames } from './types';
/**
 * Get the actual field value based on field names mapping
 */
export declare function getFieldValue(node: TreeSelectNode, field: 'label' | 'value' | 'children', fieldNames?: TreeSelectFieldNames): any;
/**
 * Flatten tree data for easier searching
 */
export declare function flattenTree(nodes: TreeSelectNode[], fieldNames?: TreeSelectFieldNames, parent?: TreeSelectNode): Array<TreeSelectNode & {
    parent?: TreeSelectNode;
    path: string[];
}>;
/**
 * Find a node by value
 */
export declare function findNodeByValue(nodes: TreeSelectNode[], value: string, fieldNames?: TreeSelectFieldNames): TreeSelectNode | undefined;
/**
 * Get all descendant values
 */
export declare function getDescendantValues(node: TreeSelectNode, fieldNames?: TreeSelectFieldNames): string[];
/**
 * Get all ancestor values
 */
export declare function getAncestorValues(nodes: TreeSelectNode[], targetValue: string, fieldNames?: TreeSelectFieldNames): string[];
/**
 * Filter tree nodes based on search
 */
export declare function filterTree(nodes: TreeSelectNode[], searchValue: string, filterFn?: (value: string, node: TreeSelectNode) => boolean, filterProp?: string, fieldNames?: TreeSelectFieldNames): TreeSelectNode[];
/**
 * Hook for managing expanded state
 */
export declare function useExpandedState(treeData: TreeSelectNode[], defaultExpandedKeys?: string[], defaultExpandAll?: boolean, controlledExpandedKeys?: string[], fieldNames?: TreeSelectFieldNames): {
    expandedKeys: Set<string>;
    toggleExpand: (key: string) => void;
    setExpanded: (keys: string[]) => void;
};
/**
 * Hook for managing checked state (checkable mode)
 */
export declare function useCheckedState(treeData: TreeSelectNode[], value?: string[], checkStrictly?: boolean, fieldNames?: TreeSelectFieldNames): {
    checkedKeys: Set<string>;
    halfCheckedKeys: Set<string>;
    toggleCheck: (nodeValue: string, node: TreeSelectNode) => void;
    setCheckedKeys: import("react").Dispatch<import("react").SetStateAction<Set<string>>>;
};
/**
 * Hook for managing async loading
 */
export declare function useAsyncLoading(): {
    loadingKeys: Set<string>;
    setLoading: (key: string, isLoading: boolean) => void;
    markLoaded: (key: string) => void;
    isLoading: (key: string) => boolean;
    isLoaded: (key: string) => boolean;
};
//# sourceMappingURL=hooks.d.ts.map