import React from 'react';
import { TextStyle } from 'react-native';

import { createText } from '@shopify/restyle';

import { Theme } from '@theme';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  semiBold?: boolean;
  bold?: boolean;
  aurato?: boolean;
}

export function Text({
  children,
  preset = 'textLg',
  semiBold,
  aurato,
  bold,
  style,
  ...srTextProps
}: TextProps) {
  const fontFamily = getFontFamily(semiBold, bold, aurato);
  return (
    <SRText
      style={[$fontSizes[preset], { fontFamily }, style]}
      color="textSpan"
      {...srTextProps}
    >
      {children}
    </SRText>
  );
}

function getFontFamily(semiBold?: boolean, bold?: boolean, aurato?: boolean) {
  switch (true) {
    case bold:
      return $fontVariants.bold;
    case semiBold:
      return $fontVariants.semiBold;
    case aurato:
      return $fontVariants.aurato;
    default:
      return $fontVariants.regular;
  }
}

type TextVariants =
  | 'text2xl'
  | 'textXl'
  | 'textLg'
  | 'textBase'
  | 'inputText'
  | 'textSm'
  | 'textXs'
  | 'headline';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  text2xl: { fontSize: 24, lineHeight: 31 },
  textXl: { fontSize: 20, lineHeight: 28 },
  textLg: { fontSize: 18, lineHeight: 29 },
  textBase: { fontSize: 16, lineHeight: 26 },
  inputText: { fontSize: 16 }, // fix line height on ios devices
  textSm: { fontSize: 14, lineHeight: 22 },
  textXs: { fontSize: 12, lineHeight: 19 },
  headline: { fontSize: 12, lineHeight: 14 },
};

export const $fontVariants = {
  black: 'Roboto Condensed Black',
  bold: 'Roboto Condensed Bold',
  italic: 'Roboto Condensed Italic',
  medium: 'Roboto Condensed Medium',
  regular: 'Roboto Condensed Regular',
  semiBold: 'Roboto Condensed SemiBold',
  aurato: 'Cinzel Regular',
};
