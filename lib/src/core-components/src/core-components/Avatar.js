'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'styled-components';
const Text = ({ size, weight, children }) => {
    return (_jsx("span", { style: {
            fontSize: {
                1: '0.75rem',
                4: '1.25rem',
            }[size],
            fontWeight: {
                regular: 400,
                heavy: 700,
            }[weight],
        }, children: children }));
};
const StyledAvatarBackground = styled.div `
  background-color: var(--aui-primary);
  color: var(--aui-on-primary);

  flex-shrink: 0;
  width: ${({ $diameter }) => $diameter};
  height: ${({ $diameter }) => $diameter};
  border-radius: var(--aui-border-radius-round);

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
/**
 * Internal Avatar component with basic feature set
 */
export const Avatar = ({ size, children }) => {
    const diameter = {
        sm: '1.25rem',
        lg: '2rem',
    }[size];
    const fontSize = {
        sm: 1,
        lg: 4,
    }[size];
    return (_jsx(StyledAvatarBackground, { "data-aui": "avatar", "$diameter": diameter, children: _jsx(Text, { size: fontSize, weight: "heavy", children: children }) }));
};
