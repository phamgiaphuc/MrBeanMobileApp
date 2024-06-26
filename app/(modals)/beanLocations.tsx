import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { markers } from '@/data/markersData'
import { useRouter } from 'expo-router'
import { AppContext } from '@/contexts/AppContextProvider'
import { LocationProps } from '@/props/location/LocationProps'

const beanLocations = () => {
  const router = useRouter();
  const { setBeanLocation } = useContext(AppContext);
  const onLocationPressed = (location: LocationProps) => {
    setBeanLocation(location);
    router.back();
  }
  return (
    <View>
      <FlatList data={markers} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => onLocationPressed(item)} style={{padding: 10, borderBottomColor: 'gray', marginVertical: 10, flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={item.image} style={{width: 56, height: 56}} resizeMode='contain'/>
            <View style={{gap: 5, justifyContent: 'center', flex: 1}}>
              <Text style={{fontSize: 20, fontFamily: 'Coolvetica'}}>{item.name}</Text>
              <Text numberOfLines={2} style={{textTransform: 'capitalize'}}>{item.address}</Text>
            </View>
          </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

export default beanLocations