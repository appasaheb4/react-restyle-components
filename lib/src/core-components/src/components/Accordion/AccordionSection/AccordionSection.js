'use client';
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React, { useContext, useRef, useState, useEffect } from 'react';
import { ButtonElement, AccordionSectionWrapper, AccordionSectionContent, AccordionDivider, AccordionSectionContentWrapper, AccordionFade, } from './elements';
import { Header } from './Header';
import { Icon } from '../../Icon/Icon';
import { useCurrentAccordionIndex } from './hooks/useCurrentAccordionIndex';
import AccordionContext from './AccordionContext';
import { StateLayer } from '../../../core-components';
import { attachSubComponents, separateChildrenByType, usePropDeprecation, } from '../../../utils';
import { tokens } from '../../../utils/designTokens';
export const AccordionSection = attachSubComponents('AccordionSection', React.forwardRef(({ buttonClassName = '', headerClassName = '', subheaderClassName = '', iconWrapperClassName = '', ariaLabel = '', icons, children, header, subheader, startOpen = false, transitionDuration = '.3s', transitionTimingFunction = 'ease-in', onClick, onOpenStateChange, isOpen, ...rest }, fRef) => {
    usePropDeprecation({
        name: 'iconSrc',
        version: '5.0.0',
        alternative: 'AccordionSection.Header.Leading and  AccordionSection.Header.Trailing',
        value: icons,
    });
    const { numbered, variant } = useContext(AccordionContext);
    const accordionRef = useRef(null);
    const accordionIndex = useCurrentAccordionIndex(accordionRef);
    const [accordionOpen, setAccordionOpenState] = useState(isOpen ?? startOpen);
    useEffect(() => {
        setAccordionOpenState(isOpen ?? startOpen);
    }, [isOpen]);
    const [headerElements, content] = separateChildrenByType(children, Header);
    const sectionHeader = React.Children.count(headerElements) !== 0 ? (headerElements) : (_jsxs(Header, { children: [numbered ? (_jsx(Header.Leading, { children: _jsxs(Header.Number, { children: [accordionIndex, "."] }) })) : (icons && (_jsx(Header.Leading, { alignment: "center", className: iconWrapperClassName, children: _jsx(Icon, { nameIcon: icons.nameIcon, propsIcon: {
                        size: 24,
                        color: tokens.white,
                        ...(icons.propsIcon || {})
                    } }) }))), _jsx(Header.Heading, { className: headerClassName, children: header }), subheader && (_jsx(Header.SupportiveText, { className: subheaderClassName, children: subheader }))] }));
    return (_jsxs(AccordionSectionWrapper, { "$variant": variant, "$isOpen": accordionOpen, "data-aui": "accordion.section", ref: accordionRef, children: [_jsxs(ButtonElement, { ref: fRef, className: buttonClassName, "aria-label": ariaLabel, "aria-expanded": accordionOpen, "$variant": variant, "$isOpen": accordionOpen, onClick: (e) => {
                    onClick?.(e);
                    onOpenStateChange?.(!accordionOpen);
                    setAccordionOpenState(!accordionOpen);
                }, ...rest, children: [_jsx(StateLayer, {}), sectionHeader] }), _jsxs(AccordionSectionContentWrapper, { "$isOpen": accordionOpen, "$transitionDuration": transitionDuration, "$transitionTimingFunction": transitionTimingFunction, children: [_jsx(AccordionSectionContent, { "aria-hidden": !accordionOpen, "$isOpen": accordionOpen, "$hasLeader": !!icons || numbered, "$transitionDuration": transitionDuration, children: _jsx("div", { style: { zIndex: -1, paddingBottom: 10 }, children: content }) }), _jsx(AccordionFade, { "$isOpen": accordionOpen, "$transitionDuration": transitionDuration, "$transitionTimingFunction": transitionTimingFunction })] }), _jsx(AccordionDivider, {})] }));
}), {
    Header,
});
