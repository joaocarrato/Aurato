import React from 'react';
import { Dimensions, FlatList, ListRenderItemInfo } from 'react-native';

import {
  Box,
  BoxInput,
  Card,
  CardProps,
  Screen,
  Text,
  TransactionCard,
} from '@components';

import { HomeHeader } from './components/HomeHeader';

const MAX_WIDTH = Dimensions.get('screen').width;
const MAX_HEIGHT = Dimensions.get('screen').height;

const mockCard: CardProps[] = [
  { type: 'expense', value: '1259,00', lastDate: '05 de setembro.' },
  { type: 'income', value: '23450,00', lastDate: '2 de setembro.' },
];

export function HomeScreen() {
  function renderItem({ item }: ListRenderItemInfo<CardProps>) {
    return (
      <Card type={item.type} value={item.value} lastDate={item.lastDate} />
    );
  }
  return (
    <Screen flex={1} position="relative" bg="backgroundSecondary">
      <AbsoluteBackground />
      <HomeHeader boxProps={{ mb: 's32' }} />

      <FlatList
        data={mockCard}
        style={{
          marginRight: -24,
          maxHeight: 141,
          marginBottom: 32,
        }}
        contentContainerStyle={{ gap: 16 }}
        ListFooterComponent={<Box />}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="s12"
      >
        <Text preset="textXl" color="textHeading" semiBold>
          Transações
        </Text>
        <Text preset="textBase">4 itens</Text>
      </Box>

      <BoxInput boxProps={{ mb: 's12' }} />

      <TransactionCard />
    </Screen>
  );
}

function AbsoluteBackground() {
  return (
    <Box
      height={MAX_HEIGHT * 0.28}
      width={MAX_WIDTH}
      position="absolute"
      bg="backgroundPrimary"
    />
  );
}
