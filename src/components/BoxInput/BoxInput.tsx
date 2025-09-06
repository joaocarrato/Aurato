import React, { useRef } from 'react';
import {
  Pressable,
  PressableProps,
  TextInput as RNTextInput,
} from 'react-native';

import { useAppTheme } from '@hooks';

import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { $fontSizes } from '../Text/Text';

type Props = {
  onPress?: PressableProps['onPress'];
  boxProps?: BoxProps;
};

export function BoxInput({ onPress, boxProps }: Props) {
  const { colors } = useAppTheme();

  const inputRef = useRef<RNTextInput>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }
  return (
    <Pressable onPress={handleFocus}>
      <Box {...$container} {...boxProps}>
        <RNTextInput
          ref={inputRef}
          style={{
            flexShrink: 1,
            flexGrow: 1,
            ...$fontSizes.inputText,
            color: colors.textSpan,
          }}
          placeholderTextColor={colors.textSpan}
          placeholder="Busque uma transação"
        />

        <Icon name="filter" color="accentBrand" size={25} onPress={onPress} />
      </Box>
    </Pressable>
  );
}

const $container: BoxProps = {
  backgroundColor: 'backgroundPrimary',
  borderBottomColor: 'borderPrimary',
  borderBottomWidth: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 's6',
  p: 's14',
};
