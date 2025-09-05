import React from 'react';

import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { PasswordInput } from '../Input/PasswordInput';
import { TextInputProps } from '../Input/TextInput';

export function FormPasswordInput<FormType extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: UseControllerProps<FormType> &
  Omit<TextInputProps, 'leftIcon' | 'secureTextEntry'>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
}
