import React from 'react';
import '../../../tc.css';
export const List = (props) => {
    const spacingClass = props.space
        ? `space-${props.direction === 'col' ? 'y' : 'x'}-${props.space}`
        : '';
    const paddingClass = props.padding ? `p-${props.space}` : '';
    const backgroundClass = props.background ? 'bg-gray-100' : '';
    const alignClass = props.align ? `justify-${props.align}` : '';
    const justifyClass = props.justify
        ? `items-${props.justify}`
        : 'items-center';
    const fillClass = props.fill ? 'flex-1' : '';
    return (React.createElement("span", { className: `flex flex-${props.direction || 'row'} ${spacingClass} ${paddingClass} ${backgroundClass} ${alignClass} ${fillClass} ${justifyClass}` }, props.children));
};