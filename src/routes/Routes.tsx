import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '@screens';

export function Routes() {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <HomeScreen />
    </NavigationContainer>
  );
}
