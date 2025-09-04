import React, { useState } from 'react';

import { Icon } from '../Icon/Icon';

import { TextInput, TextInputProps } from './TextInput';

export function PasswordInput({
  ...props
}: Omit<TextInputProps, 'secureTextEntry'>) {
  const [isSecureText, setIsSecureText] = useState(true);

  function toggleSecureText() {
    setIsSecureText(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecureText}
      rightComponent={
        <Icon
          name={isSecureText ? 'eye' : 'eyeOff'}
          size={24}
          color="textSpan"
          onPress={toggleSecureText}
        />
      }
      {...props}
    />
  );
}
