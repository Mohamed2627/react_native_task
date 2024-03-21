import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './style'

interface ITextButtonProps {
  text: string,
  onPress: () => void,
  textStyle?: StyleProp<TextStyle>,

}

const TextButton = (props: ITextButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default TextButton

