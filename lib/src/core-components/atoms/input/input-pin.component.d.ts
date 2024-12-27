import React from 'react';
import './input.styles.css';
import '../../../tc.module.css';
interface PinInputGridProps {
    title: string;
    hasError?: any;
    errorMsg?: string;
    defaultMsg?: string;
    className?: string;
    disable?: boolean;
    name?: string;
    defaultPin: Array<number | undefined>;
    onPinChanged: (item: any, index: number) => void;
}
export declare const InputPin: React.FC<PinInputGridProps>;
export {};
//# sourceMappingURL=input-pin.component.d.ts.map