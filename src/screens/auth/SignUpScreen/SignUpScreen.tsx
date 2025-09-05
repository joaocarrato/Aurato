import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  FormInput,
  FormPasswordInput,
  Screen,
  Text,
} from '@components';
import { useAppSafeArea } from '@hooks';
import { AuthStackScreenProps } from '@routes';

import { LogoBrand } from '../SignInScreen/SignInScreen';

import { signUpSchema, SignUpSchemaType } from './signUpSchema';

const defaultValues: SignUpSchemaType = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export function SignUpScreen({
  navigation,
}: AuthStackScreenProps<'SignUpScreen'>) {
  const { bottom } = useAppSafeArea();
  const { control, formState } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: 'onChange',
  });
  return (
    <Screen scrollable>
      <LogoBrand />

      <FormInput
        control={control}
        name="fullName"
        label="nome"
        leftIcon="user"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
      />

      <FormInput
        control={control}
        name="email"
        autoCapitalize="none"
        label="email"
        leftIcon="email"
        placeholder="Digite seu email"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="senha"
        placeholder="Sua senha"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="confirmPassword"
        label="senha"
        placeholder="Confirme sua senha"
        boxProps={{ mb: 's42' }}
      />

      <Button
        disabled={formState.isLoading || !formState.isValid}
        title="Cadastrar"
        rightIcon
      />

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
