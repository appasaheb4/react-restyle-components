import { styled, css, keyframes } from 'styled-components';
import { tokens } from '../../utils/designTokens';
// Animations
const fadeIn = keyframes `
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
export const MasonryContainer = styled.div `
  display: flex;
  width: 100%;
  box-sizing: border-box;
  gap: ${({ $gutter }) => $gutter}px;
`;
export const MasonryColumn = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  gap: ${({ $gutter }) => $gutter}px;
`;
export const MasonryItemWrapper = styled.div `
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  
  ${({ $minHeight }) => $minHeight &&
    css `
      min-height: ${$minHeight}px;
    `}
  
  /* Animation */
  ${({ $animated, $animationDuration, $staggerIndex, $staggerDelay }) => $animated &&
    css `
      opacity: 0;
      animation: ${fadeIn} ${$animationDuration}ms ease-out forwards;
      animation-delay: ${$staggerIndex * $staggerDelay}ms;
    `}
  
  /* Reduce motion */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;
export const MasonryImage = styled.img `
  width: 100%;
  height: auto;
  display: block;
  object-fit: ${({ $objectFit }) => $objectFit};
  border-radius: ${({ $borderRadius }) => typeof $borderRadius === 'number' ? `${$borderRadius}px` : $borderRadius};
  transition: opacity 0.3s ease;
  
  ${({ $isLoading }) => $isLoading &&
    css `
      opacity: 0;
    `}
`;
export const ImagePlaceholder = styled.div `
  width: 100%;
  height: ${({ $height }) => $height ? (typeof $height === 'number' ? `${$height}px` : $height) : '200px'};
  background: linear-gradient(
    90deg,
    ${tokens.surface || '#f0f0f0'} 25%,
    ${tokens.outlineSoft || '#e5e5e5'} 50%,
    ${tokens.surface || '#f0f0f0'} 75%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: ${({ $borderRadius }) => typeof $borderRadius === 'number' ? `${$borderRadius}px` : $borderRadius};
`;
export const EmptyState = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  color: ${tokens.onSurface ? `${tokens.onSurface}80` : '#6b7280'};
  font-size: 14px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }
`;
// Card style for default item rendering
export const MasonryCard = styled.div `
  background: white;
  border-radius: ${({ $borderRadius }) => typeof $borderRadius === 'number' ? `${$borderRadius}px` : $borderRadius};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  }
`;
export const MasonryCardImage = styled.img `
  width: 100%;
  height: auto;
  display: block;
`;
export const MasonryCardContent = styled.div `
  padding: 12px 16px;
`;
