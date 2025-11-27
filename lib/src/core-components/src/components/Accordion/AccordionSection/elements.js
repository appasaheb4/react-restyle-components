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
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  ${({ $variant }) => $variant === 'inline' &&
    css `
      border: 1px solid ${tokens.outline};
      border-radius: ${tokens.borderRadius100};
    `};
  overflow: hidden;
  width: 100%;
  color: ${tokens.onSurface};
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
  box-sizing: border-box;

  z-index: 1;
  position: relative;
  cursor: pointer;
  width: 100%;

  background-color: ${tokens.darkGray || '#4a4a4a'} !important;
  color: ${tokens.white || '#ffffff'} !important;

  display: flex;
  gap: ${tokens.spacing100};
  align-items: center;
  padding-top: ${tokens.spacing200};
  padding-right: ${tokens.spacing200};
  padding-bottom: ${tokens.spacing200};
  padding-left: ${tokens.spacing200};

  ${({ $variant }) => $variant === 'inline' &&
    css `
      border-radius: ${tokens.borderRadius100};
    `}

  &:hover:not(:disabled) ${StateLayer} {
    opacity: ${tokens.stateLayerHover};
  }

  &:active:not(:disabled) ${StateLayer} {
    opacity: ${tokens.stateLayerPress};
  }
`;
export const AccordionSectionText = styled.div `
  line-height: 1.3;
  flex-grow: 1;
  padding-right: ${tokens.spacing100};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing050};
  color: ${tokens.white};
`;
export const AccordionFade = styled.div `
  z-index: 0;
  position: relative;
  background: linear-gradient(to bottom, transparent, ${tokens.surface});
  width: 100%;
  height: ${tokens.spacing150};
  margin-top: calc(${tokens.spacing150} * -1);
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
  padding-right: ${tokens.spacing150};
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
`;
export const RotatingIcon = styled(Icon.SSR) `
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${({ $rotateIcon }) => `rotate(${$rotateIcon ? -180 : 0}deg)`};
`;
