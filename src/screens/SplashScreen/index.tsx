import { Animated, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { styles } from './style'
import { ScreenContainer } from '../../components'
import { isUserLogedIn } from '../../utils/authUtils'
import { ROUTES, replace } from '../../navigation'

const SplashScreen = () => {

  const scaleValue = useRef(new Animated.Value(.5)).current
  const startAnimation = () => {
    Animated.timing(scaleValue, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startAnimation()
    const timeoutId = setTimeout(() => {
      isUserLogedIn().then((result) => {
        if (result) {
          replace(ROUTES.Home)
        } else {
          replace(ROUTES.Login)
        }
      })
    }, 1000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <ScreenContainer style={{ justifyContent: 'center', paddingTop: 0 }}>
      <View style={{}}>
        <Animated.Text
          style={[styles.text, {
            transform: [{ scale: scaleValue }],
          }]}>
          Welcome
        </Animated.Text>
      </View>
    </ScreenContainer>
  )
}

export default SplashScreen

