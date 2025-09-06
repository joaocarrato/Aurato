import React from 'react';

import {
  Box,
  BoxProps,
  Button,
  Icon,
  Text,
  TouchableOpacityBox,
} from '@components';

import { AuratoIcon } from '../../../../assets/brand/AuratoIcon';

type Props = {
  boxProps?: BoxProps;
};

export function HomeHeader({ boxProps }: Props) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...boxProps}
    >
      <Box>
        <Box flexDirection="row" alignItems="center">
          <AuratoIcon size={50} />
          <Text
            preset="text2xl"
            color="brandPrimary"
            aurato
            style={{ fontWeight: '800' }}
          >
            Aurato
          </Text>
        </Box>

        <TouchableOpacityBox flexDirection="row" alignItems="center" ml="s8">
          <Icon name="logout" size={20} />
          <Text preset="textBase" ml="s8">
            Sair da conta
          </Text>
        </TouchableOpacityBox>
      </Box>

      <Button title="Nova transação" py="s10" />
    </Box>
  );
}
