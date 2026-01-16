export function pxToRem(sizeInPx) {
    const computedStyle = typeof window !== 'undefined'
        ? parseFloat(getComputedStyle(document.documentElement).fontSize)
        : 16;
    return sizeInPx / computedStyle;
}
