export type HoverState = 'default' | 'hover' | 'active' | 'disabled';
type UseHoverStateReturnValue = {
    hoverState: HoverState;
    onMouseOver: () => void;
    onMouseOut: () => void;
    onMouseDown: () => void;
    onMouseUp: () => void;
};
export declare const useHoverState: (disabled?: boolean) => UseHoverStateReturnValue;
export {};
