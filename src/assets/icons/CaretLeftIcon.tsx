import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function CaretLeftIcon({ size = 32, color = 'white' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0607 4.93934C21.6464 5.52513 21.6464 6.47487 21.0607 7.06066L12.1213 16L21.0607 24.9393C21.6464 25.5251 21.6464 26.4749 21.0607 27.0607C20.4749 27.6464 19.5251 27.6464 18.9393 27.0607L8.93934 17.0607C8.35355 16.4749 8.35355 15.5251 8.93934 14.9393L18.9393 4.93934C19.5251 4.35355 20.4749 4.35355 21.0607 4.93934Z"
        fill={color}
      />
    </Svg>
  );
}
