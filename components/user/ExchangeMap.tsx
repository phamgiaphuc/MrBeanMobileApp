import { useRouter } from 'expo-router';
import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const ExchangeMap = ({ mapSource }: { mapSource: any }) => {
  const router = useRouter();
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
      <Text style={styles.text}>Nearby Exchange Partners</Text>
      <TouchableOpacity onPress={() => router.push('/beans/map')}>
        <Image source={mapSource} style={styles.mapimg} />
      </TouchableOpacity>
    </View>
  );
};

export default ExchangeMap;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontFamily: 'Coolvetica',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '800',
  },
  mapimg: {
    marginTop: 10,
    width: 361,
    height: 191,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'black',
  },
});
