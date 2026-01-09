import { styled, css } from 'styled-components';
const GridContainer = styled.div `
  display: grid;
  gap: ${({ $gap }) => $gap};

  & > li {
    display: flex;
    box-sizing: border-box;

    & > * {
      width: 100%;
      height: auto;
    }
  }

  ${({ $autoFit, $columns, $gap }) => $autoFit &&
    css `
      & > *:only-child {
        width: 100%;
        max-width: calc((100% - ${$columns - 1} * ${$gap}) / ${$columns});
      }
    `}

  ${({ $minWidth, $columns, $autoFit }) => css `
      grid-template-columns: repeat(
        ${$autoFit ? 'auto-fit' : $columns},
        minmax(${$minWidth}rem, 1fr)
      );
    `};

  ${({ $maxRows, $columns, $scroll }) => $maxRows &&
    !$scroll &&
    css `
      & > *:nth-child(n + ${$columns * $maxRows + 1}) {
        display: none;
      }
    `}

  ${({ $scroll, $minWidth, $columns, $gap, $maxRows }) => $scroll &&
    css `
      &&& {
        scroll-behavior: smooth;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        grid-auto-flow: column;
        -webkit-overflow-scrolling: touch;

        /* prevent overflow from hiding the focus outline */
        & > *:focus,
        & > li > *:focus {
          outline-offset: -2px;
        }

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

        grid-template-columns: unset;
        grid-template-rows: repeat(${$maxRows || 1}, max-content);
        grid-auto-columns: max(
          calc(
            (100% - ${$columns + ($scroll.scrollHint || 0) - 1} * ${$gap}) /
              ${$columns + ($scroll.scrollHint || 0)}
          ),
          ${$minWidth}rem
        );
      }

      &&& > * {
        scroll-snap-align: ${$scroll.scrollSnapAlign || 'start'};
      }

      &&& > *:first-child {
        scroll-snap-align: start;
      }

      &&& > *:last-child {
        scroll-snap-align: end;
      }
    `}
`;
export default GridContainer;
