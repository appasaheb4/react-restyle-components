import React from 'react';
import _ from 'lodash';
import {Tooltip} from '../..';
import loadable from '@loadable/component';
import {IconBaseProps} from 'react-icons/lib';

interface IconProps {
  nameIcon: string;
  propsIcon?: IconBaseProps;
  tooltip?: string;
  isDisable?: boolean;
  onClick?: () => void;
}

export const Icon = ({
  nameIcon,
  propsIcon,
  tooltip = '',
  isDisable = false,
  onClick,
}: IconProps): JSX.Element => {
  try {
    const iconProps = {
      ...propsIcon,
      color: isDisable ? '#808080' : propsIcon?.color || '#ffffff',
    };
    const lib = nameIcon
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .split(' ')[0]
      .toLocaleLowerCase();
    // const ElementIcon: any = loadable(
    //   () => import(`react-icons/${lib}/index.js`),
    //   {
    //     resolveComponent: (el) =>
    //       el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
    //   }
    // );
    return (
      <div
        onClick={() => {
          if (!isDisable) onClick && onClick();
        }}
      >
        {/* {!_.isEmpty(tooltip) ? (
          <Tooltip tooltipText={tooltip}>
            <ElementIcon {...iconProps} />
          </Tooltip>
        ) : (
          <ElementIcon {...iconProps} />
        )} */}
      </div>
    );
  } catch (error) {
    return <></>;
  }
};
