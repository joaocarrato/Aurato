import React from 'react';

import { Box, Icon, Text } from '@components';

type FooterComponentProps = {
  iconName: 'tag' | 'calendarBlank';
  label: string;
};

export function FooterComponent({ iconName, label }: FooterComponentProps) {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="center">
      <Icon name={iconName} size={20} color="textSpan" />
      <Text preset="textLg" ml="s4">
        {label}
      </Text>
    </Box>
  );
}
