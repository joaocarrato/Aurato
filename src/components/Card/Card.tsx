import React from 'react';

import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

export interface CardProps {
  type: 'income' | 'expense';
  value: string;
  lastDate?: string;
}

export function Card({ type, value, lastDate }: CardProps) {
  const translatedType: string = type === 'income' ? 'Entrada' : 'Saída';

  return (
    <Box
      px="s32"
      py="s24"
      maxWidth={280}
      height={141}
      bg="backgroundTertiary"
      borderRadius="s8"
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="s12"
      >
        <Text preset="textXl" color="textLabel">
          {translatedType}
        </Text>
        <Icon
          name={type === 'income' ? 'arrowCircleUp' : 'arrowCircleDown'}
          color={type === 'income' ? 'accentBrandLight' : 'accentRed'}
        />
      </Box>

      <Text preset="text2xl" color="textLabel" bold>
        {`R$ ${value}`}
      </Text>

      <Text preset="textSm" color="textSpan">
        Última {translatedType.toLowerCase()} em {lastDate}
      </Text>
    </Box>
  );
}
