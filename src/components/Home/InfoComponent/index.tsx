import { Text, View } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../../../style'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
import { COLORS } from '../../../constants';

interface IInfoComponentProps {
  icon: string,
  text: string,
}

const InfoComponent = (props: IInfoComponentProps) => {
  return (
    <View style={[GLOBAL_STYLES.centerRow, styles.container]}>
      <Icon name={props.icon} size={18} color={COLORS.orange} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

export default InfoComponent
