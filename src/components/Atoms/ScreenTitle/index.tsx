import { Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './style'
import { BackButton } from '..'
import { GLOBAL_STYLES } from '../../../style'
import { COLORS, hp, wp } from '../../../constants'

interface IScreenTitleProps {
  containerStyle?: ViewStyle,
  title: string,
  textStyle?: string
}

const ScreenTitle = (props: IScreenTitleProps) => {
  return (
    <View style={[GLOBAL_STYLES.smallMargin, styles.container]}>
      <BackButton style={{
        position: 'absolute',
        zIndex: 10,
        left: wp(7),
        top: hp(3),
        backgroundColor: COLORS.primaryColor
      }} />
      <Text style={styles.textTitle}>{props.title}</Text>
    </View>
  )
}

export default ScreenTitle

