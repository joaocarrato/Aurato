import React from 'react';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import { FooterComponent } from './components/FooterComponent';

interface TransactionCardProps {
  description: string;
  type: 'income' | 'expense';
  value: string;
  category: string;
  date: string;
}

export function TransactionCard({
  description,
  type,
  value,
  category,
  date,
}: TransactionCardProps) {
  return (
    <Box
      backgroundColor="backgroundTertiary"
      p="s20"
      borderRadius="s6"
      maxHeight={140}
    >
      <Text preset="textLg" semiBold color="textHeading" mb="s4">
        {description}
      </Text>

      <Text
        preset="text2xl"
        bold
        color={type === 'expense' ? 'accentRed' : 'accentBrand'}
        mb="s12"
      >
        {type === 'expense' ? `- R$ ${value}` : `R$ ${value}`}
      </Text>

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <FooterComponent iconName="tag" label={category} />

        <FooterComponent iconName="calendarBlank" label={date} />
      </Box>
    </Box>
  );
}
