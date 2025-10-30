import { styled } from 'styled-components';
export const StateLayer = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
  background: currentColor;
  opacity: var(--state-layer-none);
`;
