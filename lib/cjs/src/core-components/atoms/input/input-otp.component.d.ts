import React from 'react';
import './input-otp.styles.css';
import '../../../tc.css';
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
