import { Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { ChangeEvent, ReactElement, useState } from 'react'
import { styles } from './style'
import { COLORS } from '../../../constants'
import { GLOBAL_STYLES } from '../../../style'
import { Icon } from '../../../utils'

interface ICustomInputProps {
  label: string,
  placeholder: string,
  isPassword: boolean,
  hasShowPassword: boolean,
  icon?: string,
  value: string,
  setValue: any,
  inputStyle?: any,
  error?: string,
  onBlur?: (e: any) => void,
  touched?: boolean
}

const CustomInput = (props: ICustomInputProps) => {

  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true)
  }

  const handleEndEditing = () => {
    setIsFocused(false);
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.label}</Text>
      <TextInput
        style={[styles.input, isFocused && GLOBAL_STYLES.focusedInput, props.inputStyle ?? {}]}
        placeholder={props.placeholder}
        keyboardType={props.label == 'Email' ? 'email-address' : 'default'}
        onChangeText={props.setValue}
        value={props.value}
        placeholderTextColor={COLORS.grey}
        onFocus={handleOnFocus}
        onEndEditing={handleEndEditing}
        onBlur={props.onBlur}
        secureTextEntry={showPassword ? false : props.label === 'Password' || props.label === 'Confirm Password' ? true : false}
      />
      {props.touched && props.error && <Text style={[GLOBAL_STYLES.textError]}>{props.error}</Text>}
      {props.icon && (
        <View style={styles.iconWrapper}>
          <Icon name={props.icon ?? ''} color={COLORS.black} size={20} />
        </View>
      )}
      {props.hasShowPassword && (
        <TouchableOpacity
          onPress={toggleShowPassword}
          style={styles.showPasswordWrapper}>
          <Icon name={showPassword ? 'eye-off-outline' : 'eye-outline'} color={COLORS.black} size={20} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default CustomInput

