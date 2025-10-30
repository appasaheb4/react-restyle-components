'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { colors } from '../../utils';
// import {CardContext} from '../../components/Card/CardContext';
import { dontForwardProps } from '../../utils';
const CardContext = React.createContext({
    isInsideCard: false,
});
export const StyledDivider = styled.hr.withConfig(dontForwardProps()) `
  margin: 0;
  border: 0;
  border-top: 1px solid ${colors.neutralBrightest};

  ${({ isInsideCard }) => isInsideCard &&
    `margin-left: -1rem; 
    margin-right: -1rem;`}
`;
export const Divider = (props) => {
    const { isInsideCard } = useContext(CardContext);
    return _jsx(StyledDivider, { isInsideCard: isInsideCard, ...props });
};
