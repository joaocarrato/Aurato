import React from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

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
    <Screen flex={1} bg="backgroundSecondary">
      <AbsoluteBackground />
      <HomeHeader boxProps={{ mb: 's32' }} />

      <FlatList
        data={mockCard}
        style={$cardStyle}
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

      <TransactionCard
        description="Hambúrguer"
        type="expense"
        value="59,00"
        category="Alimentação"
        date="05/09/2025"
      />
    </Screen>
  );
}

const $cardStyle: StyleProp<ViewStyle> = {
  paddingLeft: 24,
  marginHorizontal: -24,
  maxHeight: 141,
  marginBottom: 32,
};

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
