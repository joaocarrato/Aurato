import { createTheme } from '@shopify/restyle';

const palette = {
  // background
  backgroundPrimary: '#121214',
  backgroundSecondary: '#202024',
  backgroundTertiary: '#29292e',

  // text
  textHeadline: '#323238',
  textLabel: '#ffffff',
  textHeading: '#E1E1E6',
  textBody: '#c4c4cc',
  textSpan: '#7c7c8a',
  inputLabel: '#666666',

  // accent
  accentBrand: '#00875f',
  accentBrandDark: '#015f43',
  accentBrandLight: '#00b37e',
  accentRed: '#f75a68',
  accentRedDark: '#aa2834',
  accentBlue: '#5a86f7',
  accentBlueDark: '#284daa',

  brandPrimary: '#40916c',

  // border
  borderPrimary: '#3d3d3d',
};

export const theme = createTheme({
  colors: {
    ...palette,

    primary: palette.backgroundPrimary,
    primaryContrast: palette.textSpan,

    buttonPrimary: palette.accentBrand,
    buttonContrast: palette.textLabel,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s42: 42,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s6: 6,
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
