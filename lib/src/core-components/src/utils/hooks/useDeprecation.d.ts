export declare const isReactDevelopment: () => boolean;
type DeprecateArgs = {
    name: string;
    version: string;
    message: string;
};
export declare const useDeprecation: ({ name, message, version }: DeprecateArgs) => void;
type ComponentDeprecationArgs = {
    name: string;
    version: string;
    alternative?: string;
};
export declare const useComponentDeprecation: ({ name, version, alternative, }: ComponentDeprecationArgs) => void;
type PropDeprecationArgs = {
    name: string;
    version: string;
    alternative?: string;
    value?: any;
};
export declare const usePropDeprecation: ({ name, value, version, alternative, }: PropDeprecationArgs) => void;
type PropValueDeprecationArgs<T> = {
    component: string;
    prop: string;
    currentValue: T;
    deprecatedValues: T[];
    version: string;
};
export declare const usePropValueDeprecation: <T>({ component, prop, currentValue, deprecatedValues, version, }: PropValueDeprecationArgs<T>) => void;
export {};
