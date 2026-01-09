import { styled } from 'styled-components';
import { tokens } from '../utils/designTokens';
export const StateLayer = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  background: ${tokens.darkGray || '#4a4a4a'} !important;
  opacity: ${tokens.stateLayerNone};
`;
