import { ThemeColors } from '@theme';

import { TouchableOpacityBoxProps } from '../Box/Box';

import { ButtonPresets } from './Button';

export interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPresets,
  {
    enabled: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    enabled: {
      container: {
        backgroundColor: 'buttonPrimary',
      },
      content: 'buttonContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'borderPrimary',
      },
      content: 'textSpan',
    },
  },
  outline: {
    enabled: {
      container: {
        borderWidth: 1,
        borderColor: 'buttonPrimary',
      },
      content: 'buttonPrimary',
    },
    disabled: {
      container: {
        backgroundColor: 'borderPrimary',
      },
      content: 'textSpan',
    },
  },
};
