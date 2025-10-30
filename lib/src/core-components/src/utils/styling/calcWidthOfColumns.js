export const calcWidthOfColumns = ({ columns, totalColumns, margin, gutter, maxWidth = '100%', }) => {
    const internalGutters = (columns - 1) * gutter;
    const guttersAndMargin = 2 * margin + (totalColumns - 1) * gutter;
    return `calc(${internalGutters}px + ${columns} * (${maxWidth} - ${guttersAndMargin}px) / ${totalColumns})`;
};
