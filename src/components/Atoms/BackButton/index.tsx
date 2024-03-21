import { TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Icon } from '../../../utils'
import { GLOBAL_STYLES } from '../../../style'
import { goBack } from '../../../navigation'

interface IBackButtonProps {
  style?: ViewStyle,
  onPress?: () => void
}

const BackButton = (props: IBackButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props?.onPress ? props?.onPress : goBack}
      style={[styles.container, GLOBAL_STYLES.center, props?.style]}
    >
      <Icon name={'chevron-left'} color={'#FFF'} size={30} />
    </TouchableOpacity>
  )
}

export default BackButton

