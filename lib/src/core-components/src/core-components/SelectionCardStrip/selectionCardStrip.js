'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { styled } from 'styled-components';
// import {Card, CardProps} from '../../components/Card';
import { createTransition, dontForwardProps } from '../../utils';
import { colors } from '../../utils';
import { toggleParentStyles } from '../ToggleCore';
const Card = (props) => {
    return _jsx("div", { ...props });
};
const StyledCard = styled(Card).withConfig(dontForwardProps()) `
  display: inline-flex;
  align-items: flex-start;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.3;
  -moz-osx-font-smoothing: grayscale;

  ${() => createTransition({
    properties: ['box-shadow', 'background-color'],
})}

  ${toggleParentStyles};
`;
const Wrapper = React.forwardRef((props, fRef) => (_jsx(StyledCard, { ref: fRef, element: "label", type: "selection", selected: props.checked || props.focused, ...props })));
const InternalWrapper = styled.div.withConfig(dontForwardProps()) `
  display: flex;
  z-index: 1;
  width: 100%;
  justify-content: center;
  padding: 0.1rem 0 0 0;
  ${createTransition({
    properties: ['color'],
})};

  ${({ isDisabled }) => isDisabled &&
    `
      cursor: not-allowed;
      color: ${colors.disabledText};
`}
  ${({ disableSvgColorOverride, isDisabled }) => !disableSvgColorOverride &&
    `
    svg path {
      fill: none;
      stroke: ${isDisabled && colors.disabledText};
    }
`}
`;
export const SelectionCardStrip = {
    Wrapper,
    InternalWrapper,
};
