import React from 'react';
import { render } from '@core-utils';
import { Icon } from './icons.component';
it('render Icon correctly', () => {
    const icon = render(React.createElement(Icon, { nameIcon: "FaHistory", propsIcon: {
            color: '#000000',
            size: 24,
        } }));
    expect(icon).toMatchSnapshot();
});
//# sourceMappingURL=icons.test.js.map