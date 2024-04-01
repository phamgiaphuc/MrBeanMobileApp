import { View, Text, Button } from 'react-native'
import React from 'react'
import AdsCarousel from '@/components/carousels/AdsCarousel'

const Page = () => {
  return (
    <View style={{marginTop: 64}}>
      <Text style={{fontSize: 20, fontWeight: '600', marginHorizontal: 10, marginBottom: 10, textAlign: 'center'}}>MrBean - All Effort for Greenier Days</Text>
      <AdsCarousel />
      <View style={{backgroundColor: '#18181B', marginHorizontal: 10, marginVertical: 5, borderRadius: 8}}>
        <Button title="Give beans" color={'white'}/>
      </View>
      <View style={{backgroundColor: '#18181B', marginHorizontal: 10, marginVertical: 5, borderRadius: 8}}>
        <Button title="View beans" color={'white'}/>
      </View>
      <View style={{backgroundColor: '#18181B', marginHorizontal: 10, marginVertical: 5, borderRadius: 8}}>
        <Button title="Smart beans" color={'white'}/>
      </View>
      <View style={{backgroundColor: '#18181B', marginHorizontal: 10, marginVertical: 5, borderRadius: 8}}>
        <Button title="Capture beans" color={'white'}/>
      </View>
    </View>
  )
}

export default Page