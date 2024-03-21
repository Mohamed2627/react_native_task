import React from 'react';
import { RootStackParamList } from './stackModel';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, SignupScreen, SplashScreen } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
