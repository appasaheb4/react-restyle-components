import React from 'react';
declare const sizeMap: {
    readonly sm: "2rem";
    readonly md: "2.5rem";
    readonly lg: "3rem";
    readonly xl: "4rem";
    readonly xxl: "5rem";
};
export type AvatarSize = keyof typeof sizeMap;
export interface AvatarProps {
    /** Full name to extract initials from */
    name?: string;
    /** Custom initials (overrides name) */
    initials?: string;
    /** Avatar image URL */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** Size of the avatar */
    size?: AvatarSize;
    /** Background color */
    backgroundColor?: string;
    /** Text color */
    textColor?: string;
    /** Icon name when no name/image provided */
    iconName?: string;
    /** Custom className */
    className?: string;
    /** Click handler */
    onClick?: () => void;
}
export declare const Avatar: React.FC<AvatarProps>;
export declare const AVATAR_SIZES: ("sm" | "md" | "lg" | "xl" | "xxl")[];
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map