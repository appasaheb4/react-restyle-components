const tailwindConfig = require('../../tailwind.config.js');
const theme = tailwindConfig.theme.extend;
// Extract all design tokens from tailwind.config.js
export const tokens = {
    // Colors
    surface: theme.colors['token-surface'],
    onSurface: theme.colors['token-on-surface'],
    primary: theme.colors['token-primary'],
    onPrimary: theme.colors['token-on-primary'],
    outline: theme.colors['token-outline'],
    outlineSoft: theme.colors['token-outline-soft'],
    success: theme.colors['token-success'],
    error: theme.colors['token-error'],
    warning: theme.colors['token-warning'],
    red: theme.colors.red?.DEFAULT || '#ff0000',
    darkGray: theme.colors.grey_0 || '#4a4a4a',
    white: theme.colors.white || '#ffffff',
    // Spacing
    spacing025: theme.spacing['token-025'],
    spacing050: theme.spacing['token-050'],
    spacing075: theme.spacing['token-075'],
    spacing100: theme.spacing['token-100'],
    spacing150: theme.spacing['token-150'],
    spacing200: theme.spacing['token-200'],
    spacing300: theme.spacing['token-300'],
    spacing400: theme.spacing['token-400'],
    spacing500: theme.spacing['token-500'],
    spacing600: theme.spacing['token-600'],
    spacing800: theme.spacing['token-800'],
    spacing1000: theme.spacing['token-1000'],
    spacing1200: theme.spacing['token-1200'],
    // Border Radius
    borderRadius025: theme.borderRadius['token-025'],
    borderRadius050: theme.borderRadius['token-050'],
    borderRadius100: theme.borderRadius['token-100'],
    borderRadius200: theme.borderRadius['token-200'],
    borderRadius300: theme.borderRadius['token-300'],
    borderRadius400: theme.borderRadius['token-400'],
    borderRadiusNone: theme.borderRadius['token-none'],
    borderRadiusRound: theme.borderRadius['token-round'],
    // State Layer (from CSS variables, not in tailwind config)
    stateLayerNone: 'var(--state-layer-none)',
    stateLayerHover: 'var(--state-layer-hover)',
    stateLayerPress: 'var(--state-layer-press)',
};
