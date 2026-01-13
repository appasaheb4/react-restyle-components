"use strict";export const createGridContainer=(a,t,i)=>`
  --gap-count: calc(${t} - 1);
  --total-gap-width: calc(var(--gap-count) * ${a});
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / ${t});

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(${i}, var(--grid-item--max-width)), 1fr));
  grid-gap: ${a};
`;
