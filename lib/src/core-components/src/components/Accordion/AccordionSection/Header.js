import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { attachSubComponents, DefaultsProvider, separateChildrenByType, } from '../../../utils';
import { AccordionSectionText, StyledLeadingTrailing } from './elements';
// import {Text, TextProps} from '../Text';
const Text = ({ size, weight, color, children, ...props }) => {
    const fontSizeMap = {
        1: '0.875rem',
        2: '1rem',
        3: '1.25rem',
        4: '1.5rem',
    };
    const fontWeightMap = {
        regular: 400,
        medium: 500,
        heavy: 700,
    };
    return (_jsx("span", { style: {
            fontSize: fontSizeMap[size] || fontSizeMap[2],
            fontWeight: fontWeightMap[weight] || fontWeightMap['regular'],
            color: color || 'inherit',
        }, ...props, children: children }));
};
const LeadingTrailing = ({ children, ...props }) => (_jsx(StyledLeadingTrailing, { ...props, children: _jsx(DefaultsProvider, { value: { iconSize: 'large' }, children: children }) }));
const Leading = (props) => _jsx(LeadingTrailing, { ...props });
const Trailing = (props) => _jsx(LeadingTrailing, { ...props });
const Number = ({ children, ...props }) => (_jsx(Text, { size: 2, weight: "heavy", ...props, children: children }));
const Heading = ({ children, ...props }) => (_jsx(Text, { size: 2, weight: "heavy", ...props, children: children }));
const SupportiveText = ({ children, ...props }) => (_jsx(Text, { size: 1, color: "var(--aui-on-surface-soft)", ...props, children: children }));
export const Header = attachSubComponents('Header', ({ children }) => {
    const [leading, trailing, content] = separateChildrenByType(children, Leading, Trailing);
    return (_jsxs(_Fragment, { children: [leading, _jsx(AccordionSectionText, { children: content }), trailing] }));
}, {
    Heading,
    Leading,
    Number,
    SupportiveText,
    Trailing,
});
