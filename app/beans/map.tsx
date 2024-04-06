import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { Stack, useRouter } from 'expo-router'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Entypo } from '@expo/vector-icons'
import { markers } from '@/data/markersData'
import { AppContext } from '@/contexts/AppContextProvider'

const INITIAL_LOCATION = markers[0];

const Page = () => {
  const { beanLocation } = useContext(AppContext);
  const mapRef = useRef<any>(null);
  const router = useRouter();
  const onMarkerSelected = (location: any) => {
    Alert.alert(location.name)
  }

  useEffect(() => {
    if (beanLocation) {
      mapRef.current?.animateToRegion(beanLocation);
    }
  }, [beanLocation]);

  return (
    <View style={{flex: 1}}>
      <Stack.Screen 
        options={{
          headerTitle: 'Bean Map',
          headerTitleStyle: {
            fontFamily: 'Coolvetica',
            fontSize: 20
          },
          headerBackTitle: 'Back'
        }}
      />
      <MapView ref={mapRef} style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE} initialRegion={INITIAL_LOCATION} showsUserLocation showsMyLocationButton>
        {
          markers.map((location) => (
            <Marker key={location.id} coordinate={location} onPress={() => onMarkerSelected(location)}/>
          ))
        }
      </MapView>
      <TouchableOpacity onPress={() => router.push('/(modals)/beanLocations')} activeOpacity={0.85} style={styles.btnStyle}>
        <Entypo name="trash" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mapStyle:  {
    width: '100%',
    height: '100%'
  },
  btnStyle: {
    backgroundColor: 'white',
    padding: 16,
    position: 'absolute',
    bottom: 120,
    right: 10,
    borderRadius: 50
  }
})

export default Page