import React from 'react';
export type TooltipProps = {
    /** custom classname to pass to the tooltip element */
    className?: string;
    /** The delay (in ms) before showing the tooltip */
    delay?: number;
    /** Sets the preferred position relative to the trigger */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /** Space between the tooltip element and anchor element (arrow not included in calculation) */
    sideOffset?: number;
    /** Use this to set the content of the tooltip*/
    content?: React.ReactNode;
    /** Sets the preferred alignment relative to the trigger & position */
    align?: 'start' | 'center' | 'end';
    /**Space between alignment point and tooltip */
    alignOffset?: number;
    /** If set to true then in the case of collision finds the alternate ways by changing the position or aligment or both to properly display tooltip  */
    avoidCollisions?: boolean;
    /** Set true to prevent tooltip from displaying */
    disabled?: boolean;
};
//# sourceMappingURL=types.d.ts.map