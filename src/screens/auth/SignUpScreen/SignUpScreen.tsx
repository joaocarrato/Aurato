import React from 'react';

import {
  Box,
  Button,
  PasswordInput,
  Screen,
  Text,
  TextInput,
} from '@components';
import { useAppSafeArea } from '@hooks';
import { AuthStackScreenProps } from '@routes';

import { LogoBrand } from '../SignInScreen/SignInScreen';

export function SignUpScreen({
  navigation,
}: AuthStackScreenProps<'SignUpScreen'>) {
  const { bottom } = useAppSafeArea();
  return (
    <Screen scrollable>
      <LogoBrand />

      <TextInput
        label="nome"
        leftIcon="user"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
      />

      <TextInput
        label="email"
        leftIcon="email"
        placeholder="Digite seu email"
        boxProps={{ mb: 's20' }}
      />

      <PasswordInput
        label="senha"
        placeholder="Sua senha"
        boxProps={{ mb: 's20' }}
      />
      <PasswordInput
        label="senha"
        placeholder="Confirme sua senha"
        boxProps={{ mb: 's42' }}
      />

      <Button title="Cadastrar" rightIcon />

      <Box mt="s56" style={{ paddingBottom: bottom }}>
        <Text preset="textBase" mb="s20">
          Já tem uma conta?
        </Text>

        <Button
          title="Acessar"
          rightIcon
          preset="outline"
          onPress={navigation.goBack}
        />
      </Box>
    </Screen>
  );
}
