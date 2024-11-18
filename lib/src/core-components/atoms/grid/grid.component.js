import React from 'react';
export const Grid = (props) => (React.createElement("div", { className: `xl:grid sm:inline-block grid-cols-${props.cols || 1} gap-3` }, props.children));
