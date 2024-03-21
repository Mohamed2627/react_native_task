import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { IMAGES } from '../../../constants'
import { GLOBAL_STYLES } from '../../../style'
import { InfoComponent } from '..'

interface ICityComponentProps {
  temp: number,
  city: string,
}

const CityComponent = (props: ICityComponentProps) => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.Weather} resizeMode='cover' style={styles.coverImage} />
      <View style={[styles.childrenWrapper, GLOBAL_STYLES.centerRow]}>
        <Image source={IMAGES.sun} resizeMode={'contain'} style={styles.childImage} />
        <Text style={styles.degree}>{`${props.temp} Celsius`}</Text>
      </View>
      <View style={styles.infoWrapper}>
        <InfoComponent icon={'location-sharp'} text={props.city} />
        <InfoComponent icon={'calendar-outline'} text={'2023-3-30'} />
      </View>
    </View>
  )
}

export default CityComponent

