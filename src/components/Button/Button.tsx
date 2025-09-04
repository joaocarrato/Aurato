import React from 'react';
import { ActivityIndicator } from 'react-native';

import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

import { buttonPresets, ButtonUI } from './buttonPreset';

export type ButtonPresets = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  rightIcon?: boolean;
  preset?: ButtonPresets;
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button({
  title,
  rightIcon = false,
  preset = 'primary',
  disabled,
  isLoading,
  ...buttonProps
}: ButtonProps) {
  const $buttonContainer = getButtonContainerStyle(rightIcon);
  const buttonPreset = getButtonPreset(preset, disabled);

  //TODO: Implement custom Activity Indicator

  return (
    <TouchableOpacityBox
      {...buttonPreset.container}
      {...$buttonContainer}
      disabled={disabled || isLoading}
      {...buttonProps}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text
            preset="textBase"
            letterSpacing={0.4}
            color={buttonPreset.content}
          >
            {title}
          </Text>
          {rightIcon && (
            <Icon name="arrowRight" size={24} color={buttonPreset.content} />
          )}
        </>
      )}
    </TouchableOpacityBox>
  );
}

function getButtonPreset(preset: ButtonPresets, disabled?: boolean): ButtonUI {
  return buttonPresets[preset][disabled ? 'disabled' : 'enabled'];
}

function getButtonContainerStyle(
  rightIcon?: boolean,
): TouchableOpacityBoxProps {
  return {
    px: 's20',
    py: 's16',
    justifyContent: rightIcon ? 'space-between' : 'center',
    alignItems: 'center',
    flexDirection: rightIcon ? 'row' : undefined,
    borderRadius: 's8',
    activeOpacity: 0.9,
    height: 57,
  };
}
