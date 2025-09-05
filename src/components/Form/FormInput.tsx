import React from 'react';

import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { TextInput, TextInputProps } from '../Input/TextInput';

export function FormInput<FormType extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: UseControllerProps<FormType> & TextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
}
