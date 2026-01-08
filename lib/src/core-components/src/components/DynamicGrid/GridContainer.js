"use strict";import{styled as n,css as i}from"styled-components";const a=n.div`
  display: grid;
  gap: ${({$gap:l})=>l};

  & > li {
    display: flex;
    box-sizing: border-box;

    & > * {
      width: 100%;
      height: auto;
    }
  }

  ${({$autoFit:l,$columns:o,$gap:t})=>l&&i`
      & > *:only-child {
        width: 100%;
        max-width: calc((100% - ${o-1} * ${t}) / ${o});
      }
    `}

  ${({$minWidth:l,$columns:o,$autoFit:t})=>i`
      grid-template-columns: repeat(
        ${t?"auto-fit":o},
        minmax(${l}rem, 1fr)
      );
    `};

  ${({$maxRows:l,$columns:o,$scroll:t})=>l&&!t&&i`
      & > *:nth-child(n + ${o*l+1}) {
        display: none;
      }
    `}

  ${({$scroll:l,$minWidth:o,$columns:t,$gap:r,$maxRows:e})=>l&&i`
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

        ${l.hideScrollbar&&i`
          scrollbar-width: none;
          -ms-overflow-style: none;
          &::-webkit-scrollbar {
            display: none;
            height: 0;
            background: transparent;
          }
        `}

        grid-template-columns: unset;
        grid-template-rows: repeat(${e||1}, max-content);
        grid-auto-columns: max(
          calc(
            (100% - ${t+(l.scrollHint||0)-1} * ${r}) /
              ${t+(l.scrollHint||0)}
          ),
          ${o}rem
        );
      }

      &&& > * {
        scroll-snap-align: ${l.scrollSnapAlign||"start"};
      }

      &&& > *:first-child {
        scroll-snap-align: start;
      }

      &&& > *:last-child {
        scroll-snap-align: end;
      }
    `}
`;export default a;
