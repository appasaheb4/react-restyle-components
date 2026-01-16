export const fontFamilies = {
    default: 'Apercu, Arial, sans-serif',
    mono: 'Apercu Mono, monospace',
};
export const getFontFamily = (family) => fontFamilies[family];
export const fontFamily = fontFamilies.default;
export const fontWeights = {
    feather: 300,
    base: 400,
    heavy: 700,
    black: 900,
};
export const fontSizes = {
    0: '0.75rem',
    1: '0.875rem',
    2: '1rem',
    3: '1.25rem',
    4: '1.5rem',
    5: '2rem',
    6: '2.5rem',
    7: '3rem',
    8: '3.75rem', // 60px
};
export const getFontWeight = (weight) => fontWeights[weight];
export const getFontSize = (size) => fontSizes[size];
