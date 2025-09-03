import React from 'react';
import { ScrollView, View } from 'react-native';

type Props = {
  children: React.ReactNode;
  backgroundColor: string;
};

export function ScrollViewContainer({ children, backgroundColor }: Props) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children, backgroundColor }: Props) {
  return <View style={{ flex: 1, backgroundColor }}>{children}</View>;
}
