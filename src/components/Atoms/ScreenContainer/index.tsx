import { SafeAreaView, StatusBar, StyleProp, ViewStyle, useColorScheme } from 'react-native'
import React, { PropsWithChildren, ReactNode, } from 'react'
import { styles } from './style';

type ScreenContainerProps = PropsWithChildren<{
  style?: ViewStyle;
}>;

const ScreenContainer = ({ children, style }: ScreenContainerProps) => {
  const isDarkMode = useColorScheme() == 'dark';
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar
        animated={true}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#FFF'}
      />
      {children}
    </SafeAreaView >
  )
}

export default ScreenContainer

