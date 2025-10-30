import { styled, css } from 'styled-components';
import { Icon } from '../../Icon';
import { StateLayer } from '../../../core-components';
const Divider = styled.hr `
  border: none;
  border-top: 1px solid;
  margin: 0;
  width: 100%;
`;
export const AccordionElement = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  ${({ $variant }) => $variant === 'inline' &&
    css `
      border: 1px solid var(--outline);
      border-radius: var(--border-radius-100);
    `};
  overflow: hidden;
  width: 100%;
  color: var(--on-surface);
`;
export const AccordionSectionWrapper = styled.div `
  overflow: hidden;
  width: 100%;
  isolation: isolate;

  ${({ $variant }) => $variant === 'inline' &&
    css `
      &:last-child ${AccordionDivider} {
        display: none;
      }
    `};
`;
export const ButtonElement = styled.button `
  all: unset;

  z-index: 1;
  position: relative;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  background-color: var(--surface);

  display: flex;
  gap: var(--spacing-100);
  align-items: center;
  padding: var(--spacing-200);

  &:hover:not(:disabled) ${StateLayer} {
    opacity: var(--state-layer-hover);
  }

  &:active:not(:disabled) ${StateLayer} {
    opacity: var(--state-layer-press);
  }
`;
export const AccordionSectionText = styled.div `
  line-height: 1.3;
  flex-grow: 1;
  padding-right: var(--spacing-100);

  display: flex;
  flex-direction: column;
  gap: var(--spacing-050);
`;
export const AccordionFade = styled.div `
  z-index: 0;
  position: relative;
  background: linear-gradient(to bottom, transparent, var(--surface));
  width: 100%;
  height: var(--spacing-150);
  margin-top: calc(var(--spacing-150) * -1);
`;
const getTransitionTimingFunction = (transitionTimingFunction, isOpen) => {
    if (transitionTimingFunction !== 'ease-in' &&
        transitionTimingFunction !== 'ease-out') {
        return transitionTimingFunction;
    }
    if (isOpen) {
        return 'ease-out';
    }
    return 'ease-in';
};
export const AccordionSectionContentWrapper = styled.div `
  z-index: -1;
  position: relative;
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  transition: ${({ $transitionDuration, $transitionTimingFunction, $isOpen }) => `grid-template-rows ${$transitionDuration} ${getTransitionTimingFunction($transitionTimingFunction, $isOpen)}`};
`;
export const AccordionSectionContent = styled.div `
  overflow-y: hidden;
  transition: ${({ $transitionDuration }) => `opacity ${$transitionDuration} linear`};
  line-height: 1.3;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  padding-right: var(--spacing-150);
  padding-left: ${({ $hasLeader }) => $hasLeader ? 'var(--spacing-600)' : 'var(--spacing-200)'};
`;
export const StyledLeadingTrailing = styled.div `
  flex-shrink: 0;
  min-width: var(--spacing-300);
  display: flex;
  align-self: ${({ alignment }) => alignment === 'center' ? 'center' : 'flex-start'};

  img,
  picture {
    object-fit: contain;
  }
`;
export const AccordionDivider = styled(Divider) `
  border-color: var(--outline);
`;
export const RotatingIcon = styled(Icon.SSR) `
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${({ $rotateIcon }) => `rotate(${$rotateIcon ? -180 : 0}deg)`};
`;
