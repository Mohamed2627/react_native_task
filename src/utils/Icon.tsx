import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


interface IIconProps {
  name: string,
  color: string,
  size: number,
}

const Icon = ({ name, color, size }: IIconProps) => {
  return (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  )
}

export default Icon
