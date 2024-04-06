import { View, StyleSheet, Alert, TouchableOpacity, Text, Image, ImageProps } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { markers } from '@/data/markersData';
import { AppContext } from '@/contexts/AppContextProvider';
import { LocationProps } from '@/props/location/LocationProps';

const Page = () => {
  const { beanLocation, setBeanLocation } = useContext(AppContext);
  const [location, setLocation] = useState<LocationProps>(markers[0]);
  const mapRef = useRef<any>(null);
  const router = useRouter();

  const onMarkerSelected = (location: LocationProps) => {
    Alert.alert(location.name, location.address);
  };

  useEffect(() => {
    if (beanLocation) {
      setLocation(beanLocation);
      mapRef.current?.animateToRegion(beanLocation);
    }
  }, [beanLocation]);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: 'Bean Map',
          headerTitleStyle: {
            fontFamily: 'Coolvetica',
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => {
              setBeanLocation(null);
              router.back();
            }} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="chevron-back-sharp" size={24} color="black" />
              <Text style={{ fontSize: 16 }}>Back</Text>
            </TouchableOpacity>
          )
        }}
      />
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={location}
        showsUserLocation
        showsMyLocationButton
      >
        {markers.map((location) => (
          <Marker key={location.id} coordinate={location} onPress={() => onMarkerSelected(location)} />
        ))}
      </MapView>
      {location && (
        <View style={{ backgroundColor: 'white', padding: 10, flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={location?.image as ImageProps} style={{ width: 56, height: 56 }} resizeMode='contain'/>
          <View style={{ gap: 5, justifyContent: 'center' ,flex: 1}}>
            <Text style={{ fontSize: 20, fontFamily: 'Coolvetica' }}>{location?.name}</Text>
            <Text numberOfLines={2} style={{ textTransform: 'capitalize' }}>
              {location?.address}
            </Text>
          </View>
        </View>
      )}
      <TouchableOpacity
        onPress={() => router.push('/(modals)/beanLocations')}
        activeOpacity={0.85}
        style={styles.btnStyle}
      >
        <Entypo name="trash" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: '100%',
  },
  btnStyle: {
    backgroundColor: 'white',
    padding: 16,
    position: 'absolute',
    bottom: 120,
    right: 10,
    borderRadius: 50,
  },
});

export default Page;
