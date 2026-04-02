import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled, css } from 'styled-components';
import { createTransition } from '../../utils';
import { StateLayer } from '../StateLayer';
// import {Text} from '../../components/Text';
const Text = (props) => {
    return _jsx("span", { ...props });
};
const baseToggleStyles = css `
  position: relative;
  display: block;
  box-sizing: border-box;
  overflow: hidden;

  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  margin-right: var(--aui-spacing-100);

  ${({ $showInteraction }) => $showInteraction &&
    css `
      // Transitions
      &:before,
      [data-aui='icon'],
      ${StateLayer} {
        ${createTransition({ properties: ['opacity'] })}
      }

      ${createTransition({
        properties: ['box-shadow', 'background-color', 'color'],
    })}

      // Support keyboard focus
      &:has(~ input:focus-visible) {
        outline: 1px solid blue;
      }

      // Disabled styles
      &:has(~ input:disabled) {
        opacity: var(--aui-state-layer-on-disabled);
      }
    `}
`;
const StyledCheckbox = styled.span `
  [data-aui='icon-check'],
  [data-aui='icon-minus'] {
    position: absolute;
    inset: 0;
    margin: auto;
    transition: opacity 0.15s;
    pointer-events: none;
  }
  ${baseToggleStyles};

  border-radius: var(--aui-border-radius-050);

  ${({ $checked, $indeterminate }) => $checked || $indeterminate
    ? css `
          box-shadow: 0 0 0 1px var(--aui-inverse-surface) inset;
          background: var(--aui-inverse-surface);
          color: var(--aui-inverse-on-surface);
        `
    : css `
          box-shadow: 0 0 0 1px var(--aui-outline) inset;
          background: var(--aui-surface);
          color: var(--aui-on-surface);
        `}
`;
const StyledRadio = styled.span `
  ${baseToggleStyles};

  border-radius: var(--aui-border-radius-round);
  background: var(--aui-surface);

  ${({ $checked }) => $checked
    ? css `
          box-shadow: 0 0 0 2px var(--aui-inverse-surface) inset;
        `
    : css `
          box-shadow: 0 0 0 1px var(--aui-outline) inset;
        `}

  &:before {
    content: '';
    position: absolute;
    border-radius: var(--aui-border-radius-round);
    width: 0.625rem;
    height: 0.625rem;
    top: 0.3125rem;
    left: 0.3125rem;
    background: var(--aui-inverse-surface);
    opacity: ${({ $checked }) => ($checked ? '1' : '0')};
  }
`;
export const CheckboxToggle = ({ ...props }) => (_jsxs(StyledCheckbox, { ...props, children: [_jsx(StateLayer, {}), _jsx("span", { children: "Icons" })] }));
export const RadioToggle = (props) => (_jsx(StyledRadio, { ...props, children: _jsx(StateLayer, {}) }));
export const StyledDescription = styled(Text).attrs({
    size: 2,
}) `
  color: var(--aui-on-surface);
  line-height: 1.3;

  &:has(~ input:disabled) {
    opacity: var(--aui-state-layer-on-disabled);
    cursor: not-allowed;
  }
`;
export const HiddenInput = styled.input `
  position: fixed;
  opacity: 0;
  pointer-events: none;
`;
/** Add this style snippet to the label containing this ToggleCore component */
export const toggleParentStyles = css `
  &:not(:has(input:disabled)) {
    &:hover
      ${StyledCheckbox}
      ${StateLayer},
      &:hover
      ${StyledRadio}
      ${StateLayer} {
      opacity: var(--aui-state-layer-hover);
    }

    &:active
      ${StyledCheckbox}
      ${StateLayer},
      &:hover
      ${StyledRadio}
      ${StateLayer} {
      opacity: var(--aui-state-layer-press);
    }
  }
`;
