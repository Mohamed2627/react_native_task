import { ActivityIndicator, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './style'
import { GLOBAL_STYLES } from '../../../style'
import { COLORS } from '../../../constants'

interface ICustomButtonProps {
  text: string,
  containerStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  onPress: () => void,
  disabled?: boolean,
  loading?: boolean
}

const CustomButton = (props: ICustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={props.disabled}
      onPress={props.onPress}
      style={[GLOBAL_STYLES.center, styles.container, props.containerStyle ?? {}]}>
      {props.loading ? (
        <ActivityIndicator size="small" color={COLORS.white} />
      ) : (
        <Text style={[styles.text, props.textStyle ?? {}]}>{props.text}</Text>
      )}
    </TouchableOpacity>
  )
}

export default CustomButton

