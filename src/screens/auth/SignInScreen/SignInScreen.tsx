import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

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
import { AuthStackScreenProps } from '@routes';

import { AuratoIcon } from '../../../assets/brand/AuratoIcon';

import { signInSchema, SignInSchemaType } from './signInSchema';

export function SignInScreen({
  navigation,
}: AuthStackScreenProps<'SignInScreen'>) {
  //TODO: Implement login
  const { control } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen flex={1} justifyContent="space-around">
      <Box>
        <LogoBrand />

        <FormInput
          control={control}
          name="email"
          label="email"
          leftIcon="email"
          autoCapitalize="none"
          placeholder="Digite seu email"
          boxProps={{ mb: 's20' }}
        />

        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite seu email"
          boxProps={{ mb: 's42' }}
        />

        <Button title="Logar" rightIcon />
      </Box>

      <Box>
        <Text preset="textBase" mb="s20">
          Ainda não tem uma conta?
        </Text>

        <Button
          title="Cadastrar"
          rightIcon
          preset="outline"
          onPress={navigateToSignUpScreen}
        />
      </Box>
    </Screen>
  );
}

export function LogoBrand() {
  return (
    <Box justifyContent="center" alignItems="center" mb="s56">
      <AuratoIcon size={120} />
      <Text aurato style={$logoStyle}>
        Aurato
      </Text>
    </Box>
  );
}

const $logoStyle: StyleProp<TextStyle> = {
  fontSize: 34,
  paddingTop: 14,
  fontWeight: 'bold',
  color: '#40916c',
};
