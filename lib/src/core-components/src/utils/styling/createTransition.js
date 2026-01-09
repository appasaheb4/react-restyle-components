import { css } from 'styled-components';
export const transitionDuration = '0.2s';
export const transitionTimingFunction = 'ease-in-out';
export const createTransition = ({ properties, duration = transitionDuration, timingFunction = transitionTimingFunction, }) => css `
  transition: ${properties
    .map((property) => `${property} ${duration} ${timingFunction}`)
    .join(', ')};
`;
