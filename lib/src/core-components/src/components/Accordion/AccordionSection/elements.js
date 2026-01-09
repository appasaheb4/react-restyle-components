import { styled, css } from 'styled-components';
import { Icon } from '../../Icon/Icon';
import { StateLayer } from '../../../core-components';
import { tokens } from '../../../utils/designTokens';
const Divider = styled.hr `
  border: none;
  border-top: 1px solid;
  margin: 0;
  width: 100%;
`;
export const AccordionElement = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  gap: ${tokens.spacing050};
  ${({ $variant }) => $variant === 'inline' &&
    css `
      border: 1px solid ${tokens.outline};
      border-radius: ${tokens.borderRadius100};
      padding: ${tokens.spacing100};
      background: ${tokens.surface || '#ffffff'};
    `};
  overflow: hidden;
  width: 100%;
  color: ${tokens.onSurface};
`;
export const AccordionSectionWrapper = styled.div `
  overflow: hidden;
  width: 100%;
  isolation: isolate;
  transition: all 0.3s ease;

  ${({ $variant, $isOpen }) => $variant === 'inline' &&
    css `
      border-radius: ${tokens.borderRadius100};
      margin-bottom: ${$isOpen ? tokens.spacing100 : '0'};
      box-shadow: ${$isOpen
        ? '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)'
        : 'none'};

      &:last-child ${AccordionDivider} {
        display: none;
      }
    `};
`;
export const ButtonElement = styled.button `
  all: unset;
  box-sizing: border-box;

  z-index: 1;
  position: relative;
  cursor: pointer;
  width: 100%;

  background: ${({ $isOpen }) => $isOpen
    ? `linear-gradient(135deg, ${tokens.darkGray || '#4a4a4a'} 0%, #3a3a3a 100%)`
    : tokens.darkGray || '#4a4a4a'} !important;
  color: ${tokens.white || '#ffffff'} !important;

  display: flex;
  gap: ${tokens.spacing100};
  align-items: center;
  padding: ${tokens.spacing200} ${tokens.spacing200};

  transition: all 0.25s ease;

  ${({ $variant, $isOpen }) => $variant === 'inline' &&
    css `
      border-radius: ${$isOpen
        ? `${tokens.borderRadius100} ${tokens.borderRadius100} 0 0`
        : tokens.borderRadius100};
    `}

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #555555 0%, #3f3f3f 100%) !important;

    ${StateLayer} {
      opacity: ${tokens.stateLayerHover};
    }
  }

  &:active:not(:disabled) ${StateLayer} {
    opacity: ${tokens.stateLayerPress};
  }

  &:focus-visible {
    outline: 2px solid ${tokens.primary || '#454cbf'};
    outline-offset: 2px;
  }
`;
export const AccordionSectionText = styled.div `
  line-height: 1.4;
  flex-grow: 1;
  padding-right: ${tokens.spacing100};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing050};
  color: ${tokens.white};

  /* Better text rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
export const AccordionFade = styled.div `
  z-index: 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    transparent,
    ${tokens.surface || '#ffffff'}
  );
  width: 100%;
  height: ${tokens.spacing200};
  margin-top: calc(${tokens.spacing200} * -1);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity ${({ $transitionDuration }) => $transitionDuration} ease;
  pointer-events: none;
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
  background: ${({ $isOpen }) => $isOpen
    ? `linear-gradient(180deg, rgba(74, 74, 74, 0.05) 0%, transparent 100%)`
    : 'transparent'};
  border-left: ${({ $isOpen }) => $isOpen
    ? `3px solid ${tokens.primary || '#454cbf'}`
    : '3px solid transparent'};
  margin-left: ${({ $isOpen }) => ($isOpen ? tokens.spacing100 : '0')};
  transition: all 0.3s ease;
`;
export const AccordionSectionContent = styled.div `
  overflow-y: hidden;
  transition: ${({ $transitionDuration }) => `opacity ${$transitionDuration} linear, transform ${$transitionDuration} ease`};
  line-height: 1.6;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-8px)')};
  padding-top: ${({ $isOpen }) => ($isOpen ? tokens.spacing150 : '0')};
  padding-right: ${tokens.spacing200};
  padding-left: ${({ $hasLeader }) => $hasLeader ? tokens.spacing600 : tokens.spacing200};
`;
export const StyledLeadingTrailing = styled.div `
  flex-shrink: 0;
  min-width: ${tokens.spacing300};
  display: flex;
  align-self: ${({ alignment }) => alignment === 'center' ? 'center' : 'flex-start'};
  position: relative;
  z-index: 1;

  img,
  picture {
    object-fit: contain;
  }
`;
export const AccordionDivider = styled(Divider) `
  border-color: ${tokens.outline};
  opacity: 0.5;
  margin: ${tokens.spacing025} 0;
`;
export const RotatingIcon = styled(Icon.SSR) `
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $rotateIcon }) => `rotate(${$rotateIcon ? -180 : 0}deg)`};
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
