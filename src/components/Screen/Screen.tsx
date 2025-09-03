import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { useAppSafeArea, useAppTheme } from '@hooks';

import { Box, BoxProps } from '../Box/Box';

import { ScrollViewContainer, ViewContainer } from './ScreenContainer';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

export function Screen({
  children,
  scrollable,
  style,
  ...screenProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.backgroundPrimary}>
        <Box
          px="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...screenProps}
        >
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
