export const createGridContainer = (
/* Gap between columns, also known as "gutter" */
gridLayoutGap, 
/* Max number of columns in a row */
gridColumnCount, 
/* Min width of grid items before they wrap to a new row */
gridItemMinWidth) => `
  --gap-count: calc(${gridColumnCount} - 1);
  --total-gap-width: calc(var(--gap-count) * ${gridLayoutGap});
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / ${gridColumnCount});

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(${gridItemMinWidth}, var(--grid-item--max-width)), 1fr));
  grid-gap: ${gridLayoutGap};
`;
