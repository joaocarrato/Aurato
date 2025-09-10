import React from 'react';

import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

export type TransactionButtonType = 'income' | 'expense';

type TransactionButtonProps = {
  type: TransactionButtonType;
  isSelected: boolean;
  onPress: (type: TransactionButtonType) => void;
};

export function TransactionButton({
  type,
  isSelected,
  onPress,
}: TransactionButtonProps) {
  const $buttonContainer: TouchableOpacityBoxProps = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bg: isSelected
      ? type === 'income'
        ? 'accentBrandDark'
        : 'accentRedDark'
      : 'backgroundTertiary',
    py: 's16',
    width: '100%',
    maxWidth: 170,
    gap: 's10',
    borderRadius: 's8',
  };

  return (
    <TouchableOpacityBox {...$buttonContainer} onPress={() => onPress(type)}>
      <Icon
        name={type === 'income' ? 'arrowCircleUp' : 'arrowCircleDown'}
        color={type === 'income' ? 'accentBrand' : 'accentRed'}
        size={24}
      />
      <Text preset="textLg" color="textLabel">
        {type === 'income' ? 'Entrada' : 'Saída'}
      </Text>
    </TouchableOpacityBox>
  );
}
