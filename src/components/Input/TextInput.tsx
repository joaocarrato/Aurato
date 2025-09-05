import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native';

import { useAppTheme } from '@hooks';

import { Box, BoxProps } from '../Box/Box';
import { Icon, IconProps } from '../Icon/Icon';
import { $fontSizes, Text } from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  boxProps?: BoxProps;
  leftIcon: IconProps['name'];
  rightComponent?: React.ReactElement;
  errorMessage?: string;
}

export function TextInput({
  label,
  boxProps,
  leftIcon,
  errorMessage,
  rightComponent,
  ...textInputProps
}: TextInputProps) {
  const { colors } = useAppTheme();

  const $inputContainer = getInputContainerStyle(errorMessage);
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={focusInput}>
      <Box {...boxProps}>
        <Text
          preset="textSm"
          color={errorMessage ? 'accentRedDark' : 'inputLabel'}
          semiBold
        >
          {label.toUpperCase()}
        </Text>
        <Box {...$inputContainer}>
          <Icon name={leftIcon} color="textSpan" size={24} />
          <RNTextInput
            ref={inputRef}
            autoCapitalize="words"
            style={[$inputStyle, { color: colors.textSpan }]}
            placeholderTextColor={colors.textSpan}
            {...textInputProps}
          />
          {rightComponent && <Box>{rightComponent}</Box>}
        </Box>
        {errorMessage && (
          <Text preset="textSm" color="accentRed" mt="s4" letterSpacing={0.4}>
            {errorMessage}
          </Text>
        )}
      </Box>
    </Pressable>
  );
}

function getInputContainerStyle(errorMessage?: string): BoxProps {
  return {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: errorMessage ? 'accentRedDark' : 'borderPrimary',
    p: 's16',
    gap: 's8',
  };
}

const $inputStyle: StyleProp<TextStyle> = {
  flexGrow: 1,
  flexShrink: 1,
  fontWeight: '500',
  ...$fontSizes.inputText,
};
