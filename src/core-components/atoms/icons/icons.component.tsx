import React, {Suspense} from 'react';
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

let lib = 'md';
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

    let ElementIcon: any;
    if (lib == 'md')
      ElementIcon = loadable(() => import('react-icons/md'), {
        resolveComponent: (el) =>
          el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
      });
    else
      ElementIcon = loadable(() => import('react-icons/fa'), {
        resolveComponent: (el) =>
          el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
      });

    return (
      <div
        onClick={() => {
          if (!isDisable) onClick && onClick();
        }}
      >
        {!_.isEmpty(tooltip) ? (
          <Tooltip tooltipText={tooltip}>
            <ElementIcon {...iconProps} />
          </Tooltip>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <ElementIcon {...iconProps} />
          </Suspense>
        )}
      </div>
    );
  } catch (error) {
    return <></>;
  }
};
