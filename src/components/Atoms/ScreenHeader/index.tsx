import { Image, Text, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../../constants'
import { styles } from './style'
import { GLOBAL_STYLES } from '../../../style'
import { BackButton } from '..'

interface IScreenHeaderProps {
  title: String,
  onPressBack?: () => void
}

const ScreenHeader = (props: IScreenHeaderProps) => {
  return (
    <View style={[GLOBAL_STYLES.smallMargin, styles.container]}>
      <Image
        style={[styles.imageContainer]}
        source={IMAGES.background}
        resizeMode="cover"
      />
      <View style={styles.imageChildren}>
        <BackButton />
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  )
}

export default ScreenHeader

