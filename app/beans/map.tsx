import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const INITIAL_REGION = {
  latitude: 10.877884,
  longitude: 106.801526,
  latitudeDelta: 2,
  longitudeDelta: 2
}

const markers = [
  {
    id: 1,
    latitude: 10.877884,
    longitude: 106.801526,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: 'International University'
  }
]

const Page = () => {
  const onMarkerSelected = (location: any) => {
    Alert.alert(location.name)
  }

  return (
    <View style={{flex: 1}}>
      <Stack.Screen 
        options={{
          headerTitle: 'Bean Map',
          headerBackTitle: 'Back'
        }}
      />
      <MapView style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE} initialRegion={INITIAL_REGION} showsUserLocation showsMyLocationButton>
        {
          markers.map((location) => (
            <Marker key={location.id} coordinate={location} onPress={() => onMarkerSelected(location)}/>
          ))
        }
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  mapStyle:  {
    width: '100%',
    height: '100%'
  }
})

export default Page