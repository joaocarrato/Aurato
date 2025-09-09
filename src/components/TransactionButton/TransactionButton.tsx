import React, { useState } from 'react';

import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

type TransactionButtonProps = {
  type: 'income' | 'expense';
  isSelected?: boolean;
};

export function TransactionButton({ type }: TransactionButtonProps) {
  const [isSelected, setIsSelected] = useState(false);

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

  function toggleSelected() {
    setIsSelected(prev => !prev);
  }
  return (
    <TouchableOpacityBox {...$buttonContainer} onPress={toggleSelected}>
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
