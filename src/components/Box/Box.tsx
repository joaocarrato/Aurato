import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';

import { Theme } from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

type RestyleFn = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme>;

export type TouchableOpacityBoxProps = TouchableOpacityProps & RestyleFn;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [
    backgroundColor,
    backgroundColorShorthand,
    spacing,
    spacingShorthand,
    border,
    layout,
  ],
  TouchableOpacity,
);
