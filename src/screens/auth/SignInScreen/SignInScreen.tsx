import React from 'react';

import {
  Box,
  Button,
  PasswordInput,
  Screen,
  Text,
  TextInput,
} from '@components';

import { AuratoIcon } from '../../../assets/brand/AuratoIcon';

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
    <Box justifyContent="center" alignItems="center" mb="s56">
      <AuratoIcon size={120} />
      <Text
        aurato
        style={{
          fontSize: 34,
          paddingTop: 14,
          fontWeight: 'bold',
          color: '#40916c',
        }}
      >
        Aurato
      </Text>
    </Box>
  );
}
