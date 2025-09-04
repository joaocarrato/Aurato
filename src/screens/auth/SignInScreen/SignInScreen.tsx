import React from 'react';

import { Box, Screen, Text, TextInput } from '@components';

import { BrandLogo } from '../../../assets/brand/BrandLogo';

export function SignInScreen() {
  return (
    <Screen>
      <LogoBrand />

      <TextInput
        label="email"
        leftIcon="email"
        placeholder="Digite seu email"
        boxProps={{ mb: 's20' }}
      />

      <TextInput
        label="Senha"
        leftIcon="lock"
        placeholder="Digite seu email"
        boxProps={{ mb: 's20' }}
      />
    </Screen>
  );
}

function LogoBrand() {
  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      mb="s56"
    >
      <BrandLogo />
      <Text
        preset="text2xl"
        color="textHeading"
        ml="s16"
        bold
        style={{ fontSize: 32 }}
      >
        DT Money
      </Text>
    </Box>
  );
}
