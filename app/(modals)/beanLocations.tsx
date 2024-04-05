import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { markers } from '@/data/markersData'

const beanLocations = () => {
  return (
    <View>
      <FlatList data={markers} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => {
        if (item.type === 'school') {
          return (
            <TouchableOpacity style={{padding: 10, borderBottomColor: 'gray', marginVertical: 10, flexDirection: 'row', gap: 5}}>
              <Image source={require(`../../assets/images/brands/iu-logo.png`)} style={{width: 56, height: 56}}/>
              <View style={{gap: 5, justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontFamily: 'Coolvetica'}}>{item.name}</Text>
                <Text numberOfLines={2} style={{textTransform: 'capitalize'}}>{item.address}</Text>
              </View>
            </TouchableOpacity>
          )
        }
        if (item.type === 'starbucks') {
          return (
            <TouchableOpacity style={{padding: 10, borderBottomColor: 'gray', marginVertical: 10, flexDirection: 'row', gap: 5}}>
              <Image source={require(`../../assets/images/brands/starbucks.png`)} style={{width: 56, height: 56}}/>
              <View style={{gap: 5, justifyContent: 'center', flex: 1}}>
                <Text style={{fontSize: 20, fontFamily: 'Coolvetica'}}>{item.name}</Text>
                <Text numberOfLines={2} style={{textTransform: 'capitalize'}}>{item.address}</Text>
              </View>
            </TouchableOpacity>
          )
        }
        if (item.type === 'highlands') {
          return (
            <TouchableOpacity style={{padding: 10, borderBottomColor: 'gray', marginVertical: 10, flexDirection: 'row', gap: 8}}>
              <Image source={require(`../../assets/images/brands/highlands.png`)} style={{width: 56, height: 56}} resizeMode='contain'/>
              <View style={{gap: 5, justifyContent: 'center', flex: 1}}>
                <Text style={{fontSize: 20, fontFamily: 'Coolvetica'}}>{item.name}</Text>
                <Text numberOfLines={2} style={{textTransform: 'capitalize'}}>{item.address}</Text>
              </View>
            </TouchableOpacity>
          )
        }
      }}/>
    </View>
  )
}

export default beanLocations