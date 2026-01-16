'use client';
// import {styled,StyledProps} from 'styled-components';
import { styled } from 'styled-components';
import { colors, getFontSize, getFontWeight } from '../../utils';
import { dontForwardProps } from '../../utils';
const getButtonSize = ({ size }) => ({
    small: `
      height: 2rem;
      padding: 0.25rem 1rem;
    `,
    medium: `
      height: 3rem;
      padding: 0.75rem 1.75rem;
    `,
    large: `
      height: 4rem;
      padding: 1rem 1.75rem;
    `,
})[size];
const getHoverStyle = ({ theme, color, variant, isMobile, }) => {
    if (isMobile)
        return '';
    const themeHover = {
        ...theme,
        whiteHover: colors.neutralBrighter,
    }[`${color}Hover`];
    return {
        default: `
      background: ${themeHover};
      border-color: ${themeHover};
    `,
        outline: `
      background: ${color === 'white' ? 'transparent' : colors.neutralBrightest};
      border-color: ${color === 'primary' ? theme.primary : themeHover};
      color: ${color === 'primary' ? theme.primary : themeHover};
    `,
        flat: `
      background: ${color === 'white' ? 'transparent' : colors.neutralBrightest};
      border-color: ${color === 'white' ? themeHover : colors.neutralBrightest};
      text-decoration: unset;
      color: ${themeHover};
    `,
        text: `
      color: ${themeHover};
    `,
    }[variant];
};
const getActiveStyle = ({ theme, color, variant, }) => {
    const themePressed = {
        ...theme,
        whitePressed: colors.neutralBright,
    }[`${color}Pressed`];
    return {
        default: `
      background: ${themePressed};
      border-color: ${themePressed};
      color: ${{
            primary: theme.textOnPrimary,
            secondary: theme.textOnSecondary,
            white: colors.black,
        }[color]};
    `,
        outline: `
      background: ${color === 'white' ? 'transparent' : colors.neutralBrighter};
      border-color: ${themePressed};
      color: ${themePressed};
    `,
        flat: `
      background: ${color === 'white' ? 'transparent' : colors.neutralBrighter};
      border-color: ${color === 'white' ? themePressed : colors.neutralBrighter};
      color: ${themePressed};
    `,
        text: `
      color: ${themePressed};
    `,
    }[variant];
};
const getDisabledStyle = ({ variant }) => ({
    default: `
      background: ${colors.disabledBackground};
      border-color: ${colors.disabledBackground};
    `,
    outline: `
      border-color: ${colors.disabledText};
    `,
})[variant];
const getBaseStyle = ({ theme, color, variant, hasIcon, }) => {
    const themeColor = {
        ...theme,
        white: colors.white,
    }[color];
    return {
        default: `
      background: ${themeColor};
      border-color: ${themeColor};
      color: ${{
            primary: theme.textOnPrimary,
            secondary: theme.textOnSecondary,
            white: colors.black,
        }[color]};
    `,
        outline: `
      background: transparent;
      color: ${themeColor};
      border: 2px solid ${themeColor};
    `,
        flat: `
      background: transparent;
      color: ${themeColor};
      border-color: transparent;
      ${!hasIcon
            ? 'text-decoration: underline; text-underline-position: under;'
            : ''}
    `,
        text: `
      margin: 0;
      padding: 0;
      border: none;
      border-radius: 0.0625rem;
      color: ${themeColor};
      text-decoration: underline;
      text-underline-position: under;
      background: inherit;
      height: initial;
    `,
    }[variant];
};
export const iconOnlyStyle = {
    small: `
    padding: 0.375rem;
    height: auto;
  `,
    medium: `
    padding: 0.75rem;
    height: auto;
  `,
    large: `
    padding: 1rem;
    height: auto;
  `,
};
export const iconOnlyFigmaStyle = {
    small: `
    padding: 0.375rem;
    width: 2rem;
    height: 2rem;
  `,
    medium: `
    padding: 0.75rem;
    width: 3rem;
    height: 3rem;
  `,
    large: `
    padding: 1rem;
    width: 4rem;
    height: 4rem;
  `,
};
const getIconButtonPadding = ({ hasIcon, iconSide, size, }) => {
    if (!hasIcon)
        return '';
    if (size !== 'small') {
        return iconSide === 'left'
            ? 'padding-left: 1.25rem'
            : 'padding-right: 1.25rem';
    }
    else {
        return iconSide === 'left'
            ? 'padding-left: 0.75rem'
            : 'padding-right: 0.75rem';
    }
};
export const ButtonElement = styled.button.withConfig(dontForwardProps()) `
  font-family: inherit;
  font-weight: ${getFontWeight('base')};
  font-style: normal;
  font-size: ${({ size }) => getFontSize(size === 'large' ? 3 : 2)};
  letter-spacing: 0;
  text-align: center;
  white-space: nowrap;
  width: auto;

  ${getButtonSize};

  display: flex;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-width: 0.125rem;
  border-radius: 10rem;

  ${getBaseStyle}

  &:not(:disabled) {
    &:focus {
      outline-width: 0.125rem;
      outline-offset: 0.25rem;
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
    &:focus-visible {
      outline-width: 0.125rem;
      outline-offset: 0.25rem;
    }

    &:hover {
      cursor: pointer;
      ${getHoverStyle}
    }
    &:active {
      ${getActiveStyle}
    }
  }

  &:disabled {
    ${getDisabledStyle}

    color: ${colors.disabledText};
    -webkit-text-fill-color: ${colors.disabledText};
    cursor: not-allowed;
  }

  ${getIconButtonPadding};

  ${({ hasChildren, size, useFigmaStyles }) => {
    if (!hasChildren) {
        return useFigmaStyles ? iconOnlyFigmaStyle[size] : iconOnlyStyle[size];
    }
}}
`;
export const iconMargins = {
    small: {
        left: '0 0.25rem 0 0',
        right: '0 0 0 0.25rem',
    },
    medium: {
        left: '0 0.5rem 0 0',
        right: '0 0 0 0.5rem',
    },
    large: {
        left: '0 0.5rem 0 0',
        right: '0 0 0 0.5rem',
    },
};
export const IconWrapper = styled.div.withConfig(dontForwardProps()) `
  margin: ${({ hasChildren, iconSide, size }) => hasChildren
    ? iconSide === 'left'
        ? iconMargins[size].left
        : iconMargins[size].right
    : '0'};
`;
