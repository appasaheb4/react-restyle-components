import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from 'styled-components';
import { separateChildrenByType } from './separateChildrenByType';
const Component1 = () => _jsx("div", { children: "Component1" });
const Component2 = () => _jsx("div", { children: "Component2" });
const Component3 = () => _jsx("div", { children: "Component3" });
const Component4 = styled.div ``;
const randomId = () => Math.random().toString(36).substring(7);
const make = (...types) => types.map((C, i) => _jsx(C, { "data-testid": randomId }, i));
const expectComponentsToMatch = (actual, expected) => {
    if (Array.isArray(expected)) {
        expect(actual.length).toBe(expected.length);
        actual.forEach((actualComponent, index) => {
            expectComponentsToMatch(actualComponent, expected[index]);
        });
    }
    else {
        expect(actual.props['data-testid']).toBe(expected.props['data-testid']);
    }
};
// Write unit tests for separateChildrenByType
describe('separateChildrenByType', () => {
    it('should work with 1 component type', () => {
        const children = make(Component1, Component2, Component3, Component4);
        const [component1s, others] = separateChildrenByType(children, Component1);
        expectComponentsToMatch(component1s, [children[0]]);
        expectComponentsToMatch(others, children.slice(1));
    });
    it('should work with 2 component type', () => {
        const children = make(Component1, Component2, Component3, Component4);
        const [component2s, component3s, others] = separateChildrenByType(children, Component2, Component3);
        expectComponentsToMatch(component2s, [children[1]]);
        expectComponentsToMatch(component3s, [children[2]]);
        expectComponentsToMatch(others, [children[0], children[3]]);
    });
    it('should work with styled-components', () => {
        const MyComponent = styled(Component3) ``;
        const children = make(Component1, Component2, Component3, Component4, MyComponent);
        const [component3s, component4s, others] = separateChildrenByType(children, Component3, Component4);
        expectComponentsToMatch(component3s, [children[2], children[4]]);
        expectComponentsToMatch(component4s, [children[3]]);
        expectComponentsToMatch(others, [children[0], children[1]]);
    });
    it('should work with duplicates', () => {
        const children = make(Component1, Component2, Component1, Component2, Component1);
        const [component1s, others] = separateChildrenByType(children, Component1);
        expectComponentsToMatch(component1s, [
            children[0],
            children[2],
            children[4],
        ]);
        expectComponentsToMatch(others, [children[1], children[3]]);
    });
    it('should work with fragments', () => {
        const outerChildren = make(Component1, Component2, Component3);
        const innerChildren = make(Component3, Component4);
        const children = (_jsxs(_Fragment, { children: [outerChildren, _jsx(_Fragment, { children: innerChildren })] }));
        const [component3s, others] = separateChildrenByType(children, Component3);
        expectComponentsToMatch(component3s, [outerChildren[2], innerChildren[0]]);
        expectComponentsToMatch(others, [
            outerChildren[0],
            outerChildren[1],
            innerChildren[1],
        ]);
    });
});
