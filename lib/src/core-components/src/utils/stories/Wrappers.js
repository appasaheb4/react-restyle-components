import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'styled-components';
export const Wrappers = {
    Default: styled.div `
    display: flex;
    justify-content: flex-start;
    padding: 2rem;
  `,
    Dashed: styled.div `
    margin: auto;
    ${({ $width }) => $width && `width: ${$width};`}
    border: 2px dashed var(--aui-primary);
    border-radius: 8px;
    padding: 8px;
  `,
    TextInput: styled.div `
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
  `,
    Modal: styled.div `
    height: 100%;
    margin: -1rem;
  `,
    Row: styled.div `
    max-width: 100%;
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  `,
    Test: styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: min(100%, 600px);
  `,
};
export const Decorators = Object.entries(Wrappers).reduce((acc, [title, Wrapper]) => ({
    ...acc,
    [title]: (Story) => (_jsx(Wrapper, { children: _jsx(Story, {}) })),
}), {}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
);
