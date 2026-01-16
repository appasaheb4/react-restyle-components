import { styled, css } from 'styled-components';
import { sizeMap, } from '../types';
const getTransform = (overlap, position) => {
    const [vertical, horizontal] = position.split('-');
    let verticalTranslate, horizontalTranslate;
    vertical === 'top'
        ? (verticalTranslate = '-50%')
        : (verticalTranslate = '50%');
    horizontal === 'right'
        ? (horizontalTranslate = '50%')
        : (horizontalTranslate = '-50%');
    if (overlap === 'square') {
        return css `
      transform: translate(${horizontalTranslate}, ${verticalTranslate});
      ${vertical}: 0;
      ${horizontal}: 0;
    `;
    }
    return css `
    transform: translate(${horizontalTranslate}, ${verticalTranslate});
    ${vertical}: 14%;
    ${horizontal}: 14%;
  `;
};
const getColor = (variant) => {
    switch (variant) {
        case 'alert':
            return css `
        background-color: var(--aui-status-error);
        color: var(--aui-status-on-error);
      `;
        case 'warn':
            return css `
        background-color: var(--aui-status-warning);
        color: var(--aui-status-on-warning);
      `;
        case 'positive':
            return css `
        background-color: var(--aui-status-success);
        color: var(--aui-status-on-success);
      `;
        case 'neutral':
            return css `
        background-color: var(--aui-neutral-soft);
        color: var(--aui-on-neutral-soft);
        border: 1px solid var(--aui-outline);
      `;
        default:
            return css `
        background-color: var(--aui-primary);
        color: var(--aui-on-primary);
      `;
    }
};
const getPadding = (size, hasIcon) => {
    if (size === 'sm' && !hasIcon) {
        return css `
      padding: 0 var(--aui-spacing-050);
    `;
    }
    else if (size === 'md' && !hasIcon) {
        return css `
      padding: 0 var(--aui-spacing-075);
    `;
    }
    else {
        return css `
      padding: 0;
    `;
    }
};
const getSharedStyles = (props) => css `
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 1rem;
  width: fit-content;
  min-height: ${sizeMap[props.$size]};
  min-width: ${sizeMap[props.$size]};
  ${props.$size === 'hint' &&
    css `
    outline: 2px solid var(--aui-surface);
  `}
  ${getColor(props.$variant)};
  ${getPadding(props.$size, props.$hasIcon)}
`;
export const StyledBadge = styled.div `
  position: absolute;
  ${getSharedStyles}
  ${(props) => getTransform(props.$overlap, props.$position)};
`;
export const StyledInline = styled.div `
  ${getSharedStyles}
`;
export const StyledText = styled.span `
  font-size: ${({ $size }) => ($size === 'sm' ? '0.75rem' : '0.875rem')};
  font-weight: 700;
  line-height: 1rem;
  vertical-align: middle;
  font-variant-numeric: tabular-nums lining-nums;
`;
export const StyledIcon = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => ($size === 'sm' ? '0.625rem' : '0.75rem')};
  height: ${({ $size }) => ($size === 'sm' ? '0.625rem' : '0.75rem')};

  .iconContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 100%;
    height: 100%;
  }
`;
