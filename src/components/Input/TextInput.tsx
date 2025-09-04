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

interface TextInputProps extends RNTextInputProps {
  label: string;
  boxProps?: BoxProps;
  leftIcon: IconProps['name'];
}

export function TextInput({
  label,
  boxProps,
  leftIcon,
  ...textInputProps
}: TextInputProps) {
  const { colors } = useAppTheme();

  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={focusInput}>
      <Box>
        <Text preset="textSm" color="inputLabel" semiBold>
          {label.toUpperCase()}
        </Text>
        <Box {...$inputContainer} {...boxProps}>
          <Icon name={leftIcon} color="textSpan" size={24} />
          <RNTextInput
            ref={inputRef}
            autoCapitalize="words"
            style={[$inputStyle, { color: colors.textSpan }]}
            placeholderTextColor={colors.textSpan}
            {...textInputProps}
          />
        </Box>
      </Box>
    </Pressable>
  );
}

const $inputContainer: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomWidth: 1,
  borderBottomColor: 'borderPrimary',
  p: 's16',

  gap: 's8',
};

const $inputStyle: StyleProp<TextStyle> = {
  flexGrow: 1,
  flexShrink: 1,
  fontWeight: '500',
  ...$fontSizes.inputText,
};
