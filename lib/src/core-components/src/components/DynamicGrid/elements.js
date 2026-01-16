import { styled, css, keyframes } from 'styled-components';
import { breakpoints } from '../../utils/abstracts';
import { tokens } from '../../utils/designTokens';
// Animation keyframes
const fadeIn = keyframes `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slideIn = keyframes `
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const scaleIn = keyframes `
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const shimmer = keyframes `
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;
// Get animation based on type
const getAnimation = (type, duration) => {
    switch (type) {
        case 'fade':
            return css `
        animation: ${fadeIn} ${duration}ms ease-out forwards;
      `;
        case 'slide':
            return css `
        animation: ${slideIn} ${duration}ms ease-out forwards;
      `;
        case 'scale':
            return css `
        animation: ${scaleIn} ${duration}ms ease-out forwards;
      `;
        default:
            return '';
    }
};
// Main grid container
export const GridWrapper = styled.div `
  position: relative;
  width: 100%;

  /* Variant: contained */
  ${({ $variant }) => $variant === 'contained' &&
    css `
      background: linear-gradient(
        135deg,
        ${tokens.surface || '#ffffff'} 0%,
        #f8f9fa 100%
      );
      border: 1px solid ${tokens.outline || '#e9ecef'};
      border-radius: ${tokens.borderRadius100 || '8px'};
      padding: ${tokens.spacing200 || '1rem'};
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    `}

  /* Variant: card */
  ${({ $variant }) => $variant === 'card' &&
    css `
      background: ${tokens.surface || '#ffffff'};
      border-radius: ${tokens.borderRadius200 || '16px'};
      padding: ${tokens.spacing300 || '1.5rem'};
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    `}
`;
// Grid container with all layout logic
export const GridContainer = styled.div `
  display: grid;
  width: 100%;
  gap: ${({ $gap, $rowGap, $columnGap }) => $rowGap || $columnGap
    ? `${$rowGap || $gap} ${$columnGap || $gap}`
    : $gap};

  /* Grid alignment */
  ${({ $alignItems }) => $alignItems &&
    css `
      align-items: ${$alignItems};
    `}

  ${({ $justifyItems }) => $justifyItems &&
    css `
      justify-items: ${$justifyItems};
    `}

  ${({ $alignContent }) => $alignContent &&
    css `
      align-content: ${$alignContent};
    `}

  ${({ $justifyContent }) => $justifyContent &&
    css `
      justify-content: ${$justifyContent};
    `}

  /* Grid template columns */
  ${({ $minWidth, $maxWidth, $columns, $autoFit }) => css `
    grid-template-columns: repeat(
      ${$autoFit ? 'auto-fit' : $columns},
      minmax(${$minWidth}rem, ${$maxWidth ? `${$maxWidth}rem` : '1fr'})
    );
  `}

  /* Auto-fit single child centering */
  ${({ $autoFit, $columns, $gap }) => $autoFit &&
    css `
      & > *:only-child {
        width: 100%;
        max-width: calc((100% - ${$columns - 1} * ${$gap}) / ${$columns});
      }
    `}

  /* Max rows limit (hide overflow) */
  ${({ $maxRows, $columns, $scroll }) => $maxRows &&
    !$scroll?.enabled &&
    css `
      & > *:nth-child(n + ${$columns * $maxRows + 1}) {
        display: none;
      }
    `}

  /* Scroll mode */
  ${({ $scroll, $minWidth, $columns, $gap, $maxRows }) => $scroll?.enabled &&
    css `
      scroll-behavior: ${$scroll.smoothScroll !== false ? 'smooth' : 'auto'};
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      grid-auto-flow: column;
      -webkit-overflow-scrolling: touch;

      /* Prevent overflow from hiding focus outline */
      & > *:focus,
      & > li > *:focus {
        outline-offset: -2px;
      }

      /* Hide scrollbar if configured */
      ${$scroll.hideScrollbar &&
        css `
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          display: none;
          height: 0;
          background: transparent;
        }
      `}

      /* Custom scrollbar styling */
      ${!$scroll.hideScrollbar &&
        css `
        scrollbar-width: thin;
        scrollbar-color: ${tokens.outline || '#dee2e6'} transparent;

        &::-webkit-scrollbar {
          height: 6px;
        }

        &::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb {
          background: ${tokens.outline || '#dee2e6'};
          border-radius: 3px;

          &:hover {
            background: ${tokens.primary || '#454cbf'};
          }
        }
      `}

      grid-template-columns: unset;
      grid-template-rows: repeat(${$maxRows || 1}, max-content);
      grid-auto-columns: max(
        calc(
          (100% - ${$columns + ($scroll.scrollHint || 0) - 1} * ${$gap}) /
            ${$columns + ($scroll.scrollHint || 0)}
        ),
        ${$minWidth}rem
      );

      & > * {
        scroll-snap-align: ${$scroll.scrollSnapAlign || 'start'};
      }

      & > *:first-child {
        scroll-snap-align: start;
      }

      & > *:last-child {
        scroll-snap-align: end;
      }
    `}

  /* List item styling */
  & > li {
    display: flex;
    box-sizing: border-box;
    list-style: none;

    & > * {
      width: 100%;
      height: auto;
    }
  }
`;
// Grid item wrapper with animations
export const GridItem = styled.div `
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${({ $colSpan }) => $colSpan &&
    css `
      grid-column: span ${$colSpan};
    `}

  ${({ $rowSpan }) => $rowSpan &&
    css `
      grid-row: span ${$rowSpan};
    `}

  ${({ $order }) => $order !== undefined &&
    css `
      order: ${$order};
    `}

  ${({ $alignSelf }) => $alignSelf &&
    css `
      align-self: ${$alignSelf};
    `}

  ${({ $justifySelf }) => $justifySelf &&
    css `
      justify-self: ${$justifySelf};
    `}

  ${({ $borderRadius }) => $borderRadius &&
    css `
      border-radius: ${$borderRadius};
      overflow: hidden;
    `}

  ${({ $padding }) => $padding &&
    css `
      padding: ${$padding};
    `}

  ${({ $aspectRatio }) => $aspectRatio &&
    css `
      aspect-ratio: ${$aspectRatio};
    `}

  /* Animation */
  ${({ $animation, $animationIndex = 0 }) => $animation?.enabled &&
    $animation.type !== 'none' &&
    css `
      opacity: 0;
      animation-delay: ${$animationIndex * ($animation.staggerDelay || 50)}ms;
      ${getAnimation($animation.type, $animation.duration || 300)}
    `}

  & > * {
    width: 100%;
    height: 100%;
  }
`;
// Skeleton loader
export const SkeletonItem = styled.div `
  background: linear-gradient(
    90deg,
    ${tokens.surface || '#f0f0f0'} 25%,
    #e8e8e8 50%,
    ${tokens.surface || '#f0f0f0'} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${({ $borderRadius }) => $borderRadius || tokens.borderRadius100 || '8px'};
  min-height: 100px;

  ${({ $aspectRatio }) => $aspectRatio &&
    css `
      aspect-ratio: ${$aspectRatio};
    `}
`;
// Empty state container
export const EmptyState = styled.div `
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${tokens.spacing400 || '2rem'};
  text-align: center;
  color: ${tokens.onSurface ? `${tokens.onSurface}80` : '#6c757d'};

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: ${tokens.spacing200 || '1rem'};
    opacity: 0.5;
  }
`;
// Navigation arrows for scroll mode
export const ScrollArrow = styled.button `
  position: absolute;
  top: 50%;
  ${({ $direction }) => ($direction === 'left' ? 'left: -16px;' : 'right: -16px;')}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${tokens.surface || '#ffffff'};
  border: 1px solid ${tokens.outline || '#e9ecef'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${tokens.onSurface || '#1a1a2e'};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: ${tokens.primary || '#454cbf'};
    color: ${tokens.white || '#ffffff'};
    border-color: ${tokens.primary || '#454cbf'};
    transform: translateY(-50%) scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid ${tokens.primary || '#454cbf'};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  /* Hide on mobile */
  ${breakpoints.xs} {
    display: none;
  }
`;
// Pagination dots for scroll mode
export const ScrollDots = styled.div `
  display: flex;
  justify-content: center;
  gap: ${tokens.spacing100 || '0.5rem'};
  margin-top: ${tokens.spacing200 || '1rem'};
`;
export const ScrollDot = styled.button `
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => $active ? tokens.primary || '#454cbf' : tokens.outline || '#dee2e6'};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    background: ${tokens.primary || '#454cbf'};
    transform: scale(1.2);
  }

  &:focus-visible {
    outline: 2px solid ${tokens.primary || '#454cbf'};
    outline-offset: 2px;
  }
`;
// Loading overlay
export const LoadingOverlay = styled.div `
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  z-index: 20;
`;
