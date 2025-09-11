import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { StyleProp, TextInputProps, TextStyle } from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetTextInputProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput';

import {
  Box,
  Button,
  Icon,
  Text,
  TransactionButton,
  TransactionButtonType,
} from '@components';
import { useAppTheme } from '@hooks';
import { theme } from '@theme';

interface Props {
  onClose?: () => void;
}

type Ref = BottomSheet;

export const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const [transactionType, setTransactionType] =
    useState<TransactionButtonType | null>(null);
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const { colors } = useAppTheme();
  const snapPoints = useMemo(() => ['60%'], []);

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

  function handleSelect(type: TransactionButtonType) {
    setTransactionType(type);
    console.log('Selecionado: ', type);
  }

  function resetForm() {
    setDescription('');
    setPrice('');
    setCategory('');
    setTransactionType(null);
  }

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      onChange={index => {
        if (index === -1) resetForm();
      }}
      enableHandlePanningGesture={false}
      enableContentPanningGesture={false}
      enableDynamicSizing={false}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: colors.backgroundSecondary }}
      handleIndicatorStyle={{ backgroundColor: colors.backgroundSecondary }}
      keyboardBlurBehavior="restore"
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
          <Icon name="x" size={24} color="textSpan" onPress={props.onClose} />
        </Box>

        <BottomSheetInput
          value={description}
          onChangeText={setDescription}
          placeholder="Descrição"
        />

        <BottomSheetInput
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholder="Preço"
        />

        <BottomSheetInput
          value={category}
          onChangeText={setCategory}
          placeholder="Categoria"
        />

        <Box flexDirection="row" alignItems="center" gap="s8" mt="s12" mb="s40">
          <TransactionButton
            type="income"
            isSelected={transactionType === 'income'}
            onPress={handleSelect}
          />
          <TransactionButton
            type="expense"
            isSelected={transactionType === 'expense'}
            onPress={handleSelect}
          />
        </Box>

        <Button
          title="Cadastrar"
          onPress={() =>
            console.log(
              `Descrição: ${description}; Preço: ${price}; Categoria: ${category}; Type: ${transactionType}`,
            )
          }
        />
      </BottomSheetView>
    </BottomSheet>
  );
});

function BottomSheetInput({
  ...props
}: BottomSheetTextInputProps & TextInputProps) {
  return (
    <BottomSheetTextInput
      style={$textInputStyle}
      placeholderTextColor={theme.colors.textSpan}
      {...props}
    />
  );
}

const $textInputStyle: StyleProp<TextStyle> = {
  backgroundColor: theme.colors.backgroundPrimary,
  padding: theme.spacing.s16,
  borderRadius: theme.borderRadii.s6,
  fontSize: 16,
  marginBottom: theme.spacing.s12,
  color: theme.colors.textLabel,
};
