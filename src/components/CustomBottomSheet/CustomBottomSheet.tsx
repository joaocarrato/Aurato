import React, { forwardRef, useCallback, useMemo } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

import { Box, Icon, Text } from '@components';
import { useAppTheme } from '@hooks';
import { theme } from '@theme';

interface Props {
  onPress?: () => void;
}

type Ref = BottomSheet;

export const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const { colors } = useAppTheme();
  const snapPoints = useMemo(() => ['60%', '60%'], []);

  const renderBackdrop = useCallback(
    (_props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.7}
        {..._props}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={ref}
      enableHandlePanningGesture={false}
      enableContentPanningGesture={false}
      enableDynamicSizing={false}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: colors.backgroundSecondary }}
      handleIndicatorStyle={{ backgroundColor: colors.backgroundSecondary }}
    >
      <BottomSheetView style={{ padding: 24 }}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb="s24"
        >
          <Text preset="textXl" color="textLabel" semiBold>
            Nova transação
          </Text>
          <Icon name="x" size={24} color="textSpan" onPress={props.onPress} />
        </Box>

        <BottomSheetTextInput
          placeholder="Descrição"
          style={$textInputStyle}
          placeholderTextColor={colors.textSpan}
        />

        <BottomSheetTextInput
          placeholder="Preço"
          style={$textInputStyle}
          placeholderTextColor={colors.textSpan}
        />

        <BottomSheetTextInput
          placeholder="Categoria"
          style={$textInputStyle}
          placeholderTextColor={colors.textSpan}
        />
      </BottomSheetView>
    </BottomSheet>
  );
});

const $textInputStyle: StyleProp<TextStyle> = {
  backgroundColor: theme.colors.backgroundPrimary,
  padding: 16,
  borderRadius: 6,
  fontSize: 16,
  marginBottom: 12,
};
