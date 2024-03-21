import { Image, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './style'
import { GLOBAL_STYLES } from '../../../style'

interface ISocialbuttonProps {
  containerStyle?: StyleProp<ViewStyle>,
  img: ImageSourcePropType,
  imgStyle?: StyleProp<ImageStyle>,
  onPress: () => void
}

const SocialButton = (props: ISocialbuttonProps) => {
  return (
    <TouchableOpacity style={[GLOBAL_STYLES.center, styles.container]}>
      <Image source={props.img} resizeMode='contain' style={styles.img} />
    </TouchableOpacity>
  )
}

export default SocialButton

