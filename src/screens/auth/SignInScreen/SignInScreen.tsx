import React from 'react';

import {
  Box,
  Button,
  PasswordInput,
  Screen,
  Text,
  TextInput,
} from '@components';

import { BrandLogo } from '../../../assets/brand/BrandLogo';

export function SignInScreen() {
  return (
    <Screen flex={1} justifyContent="space-around">
      <Box>
        <LogoBrand />
        <TextInput
          label="email"
          leftIcon="email"
          placeholder="Digite seu email"
          boxProps={{ mb: 's20' }}
        />

        <PasswordInput
          label="Senha"
          leftIcon="lock"
          placeholder="Digite seu email"
          boxProps={{ mb: 's42' }}
        />

        <Button title="Logar" rightIcon />
      </Box>

      <Box>
        <Text preset="textBase" mb="s20">
          Ainda não tem uma conta?
        </Text>

        <Button title="Cadastrar" rightIcon preset="outline" />
      </Box>
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
