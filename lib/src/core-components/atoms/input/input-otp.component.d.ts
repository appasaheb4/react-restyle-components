import React from 'react';
interface PinInputGridProps {
    title?: string;
    hasError?: boolean;
    className?: string;
    disable?: boolean;
    blur?: any;
    name?: string;
    pin: Array<number | undefined>;
    onPinChanged: (pinEntry: number | undefined, index: number) => void;
}
export declare const InputOtp: React.FC<PinInputGridProps>;
export {};
//# sourceMappingURL=input-otp.component.d.ts.map