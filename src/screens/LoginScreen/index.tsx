import { ImageSourcePropType, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { LoginForm, ScreenContainer, ScreenHeader, TextButton } from '../../components'
import { GLOBAL_STYLES } from '../../style'
import { COLORS, FONTS, IMAGES } from '../../constants'
import SocialButton from '../../components/Atoms/SocialButton'
import { ROUTES, navigateTo } from '../../navigation'

const socialImages: ImageSourcePropType[] = [IMAGES.google, IMAGES.facebook, IMAGES.x]

const LoginScreen = () => {

  const goToSignUp = () => {
    navigateTo(ROUTES.Signup)
  }

  return (
    <ScreenContainer>
      <ScreenHeader title={'Sign in to your account'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[GLOBAL_STYLES.generalMargin, GLOBAL_STYLES.contentScroll]}>
        <LoginForm />
        <View style={GLOBAL_STYLES.centerRow}>
          <Text style={{ color: COLORS.black, fontSize: FONTS.SIZES.textButton }}>New user? </Text>
          <TextButton text='Sign Up' onPress={goToSignUp} textStyle={{ color: COLORS.primaryColor, fontFamily: FONTS.FAMILY.bold }} />
          <Text style={styles.borderText}>Or</Text>
        </View>
        <View style={[GLOBAL_STYLES.center, styles.borderContainer]} />
        <View style={GLOBAL_STYLES.centerRow}>
          {socialImages.map((img: ImageSourcePropType, index: number) => (
            <SocialButton key={index} img={img} onPress={() => { }} />
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  )
}

export default LoginScreen
