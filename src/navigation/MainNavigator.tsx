import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils';
import MainStackNavigator from './MainStackNavigator';

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;