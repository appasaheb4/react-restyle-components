import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'styled-components';
import { Icon } from '../Icon/Icon';
// Avatar size configuration
const sizeMap = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
    xl: '4rem',
    xxl: '5rem', // 80px
};
// Styled components
const AvatarContainer = styled.div `
  width: ${({ $size }) => sizeMap[$size]};
  height: ${({ $size }) => sizeMap[$size]};
  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $textColor }) => $textColor};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  user-select: none;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  transition: all 0.2s ease-in-out;

  &:hover {
    ${({ $clickable }) => $clickable &&
    `
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `}
  }
`;
const AvatarImage = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const InitialsText = styled.span `
  font-weight: 600;
  font-size: ${({ $size }) => {
    switch ($size) {
        case 'sm':
            return '0.75rem'; // 12px
        case 'md':
            return '0.875rem'; // 14px
        case 'lg':
            return '1rem'; // 16px
        case 'xl':
            return '1.25rem'; // 20px
        case 'xxl':
            return '1.5rem'; // 24px
        default:
            return '0.875rem';
    }
}};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
const IconWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => {
    switch ($size) {
        case 'sm':
            return '1rem';
        case 'md':
            return '1.25rem';
        case 'lg':
            return '1.5rem';
        case 'xl':
            return '2rem';
        case 'xxl':
            return '2.5rem';
        default:
            return '1.25rem';
    }
}};
  height: ${({ $size }) => {
    switch ($size) {
        case 'sm':
            return '1rem';
        case 'md':
            return '1.25rem';
        case 'lg':
            return '1.5rem';
        case 'xl':
            return '2rem';
        case 'xxl':
            return '2.5rem';
        default:
            return '1.25rem';
    }
}};
`;
// Utility functions
const getInitials = (name) => {
    if (!name)
        return '';
    const nameParts = name.trim().split(/\s+/);
    if (nameParts.length === 1) {
        return nameParts[0].charAt(0).toUpperCase();
    }
    // Take first letter of first name and first letter of last name
    const firstInitial = nameParts[0].charAt(0).toUpperCase();
    const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    return firstInitial + lastInitial;
};
const generateBackgroundColor = (text) => {
    // Generate a consistent color based on text
    const colors = [
        '#f56565',
        '#ed8936',
        '#ecc94b',
        '#48bb78',
        '#38b2ac',
        '#4299e1',
        '#667eea',
        '#9f7aea',
        '#ed64a6',
        '#f687b3',
        '#fc8181',
        '#f6ad55',
        '#fbd38d',
        '#68d391',
        '#4fd1c7',
        '#63b3ed',
        '#7c3aed',
        '#a78bfa',
        '#f093fb',
        '#fbb6ce',
    ];
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
};
const getContrastColor = (backgroundColor) => {
    // Simple contrast calculation
    const darkColors = ['#f56565', '#ed8936', '#667eea', '#9f7aea', '#7c3aed'];
    return darkColors.includes(backgroundColor) ? '#ffffff' : '#ffffff';
};
// Main Avatar component
export const Avatar = ({ name = '', initials, src, alt, size = 'md', backgroundColor, textColor, iconName = 'FaUser', className, onClick, }) => {
    // Determine what to display
    const displayInitials = initials || getInitials(name);
    const defaultBgColor = backgroundColor ||
        generateBackgroundColor(displayInitials || name || 'User');
    const defaultTextColor = textColor || getContrastColor(defaultBgColor);
    // Render image if src is provided
    if (src) {
        return (_jsx(AvatarContainer, { "$size": size, "$backgroundColor": defaultBgColor, "$textColor": defaultTextColor, "$clickable": !!onClick, className: className, onClick: onClick, title: name || alt, children: _jsx(AvatarImage, { src: src, alt: alt || name || 'Avatar' }) }));
    }
    // Render initials if name or initials are provided
    if (displayInitials) {
        return (_jsx(AvatarContainer, { "$size": size, "$backgroundColor": defaultBgColor, "$textColor": defaultTextColor, "$clickable": !!onClick, className: className, onClick: onClick, title: name || `${displayInitials} Avatar`, children: _jsx(InitialsText, { "$size": size, children: displayInitials }) }));
    }
    // Render icon as fallback
    return (_jsx(AvatarContainer, { "$size": size, "$backgroundColor": defaultBgColor, "$textColor": defaultTextColor, "$clickable": !!onClick, className: className, onClick: onClick, title: "User Avatar", children: _jsx(IconWrapper, { "$size": size, children: _jsx(Icon, { nameIcon: iconName, propsIcon: {
                    color: defaultTextColor,
                    size: '100%',
                } }) }) }));
};
// Export size constants for external use
export const AVATAR_SIZES = Object.keys(sizeMap);
// Default export
export default Avatar;
