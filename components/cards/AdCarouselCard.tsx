import { View, Text, Image, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'

const AdCarouselCard = ({item, index}) => {
  const { width } = useWindowDimensions();
  return (
    <View key={index}>
      <Image source={item.image} style={{width: width, height: 220}}/>
    </View>
  )
}

export default AdCarouselCard