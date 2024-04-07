import { btnColors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CameraScreen from '../camera/camera';
import QrCodeScreen from '../camera/qrCode';
import { Stack, useFocusEffect } from 'expo-router';

const Page = () => {
  const [type, setType] = useState<string>('');

  useFocusEffect(
    useCallback(() => {
      setType('');
      return () => {};
    }, [])
  );

  return (
    <View style={{flex: 1}}>
      <Stack.Screen 
        options={{
          headerTitle: () => {
            if (!type) return <Text style={styles.header_text_style}>Camera mode</Text>;
            if (type === 'camera') {
              return <Text style={styles.header_text_style}>Camera</Text>
            } else {
              return <Text style={styles.header_text_style}>QR Code</Text>
            }
          },
          headerLeft: () => {
            if (type) {
              return (
                <TouchableOpacity onPress={() => setType('')} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Ionicons name="chevron-back-sharp" size={24} color="black" />
                  <Text style={{ fontSize: 16 }}>Back</Text>
                </TouchableOpacity>
              )
            }
          }
          }}
      />
      {
        !type && (
          <View style={styles.btn_container}>
            <Text style={{fontSize: 16}}>Choose camera mode below</Text>
            <TouchableOpacity onPress={() => setType('camera')} style={styles.btn_style}>
              <Ionicons name="camera-outline" size={24} color="white" />
              <Text style={styles.text_style}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setType('qr-code')} style={styles.btn_style}>
              <Ionicons name="qr-code-outline" size={24} color="white" />
              <Text style={styles.text_style}>QR Code</Text>
            </TouchableOpacity>
          </View>
        )
      }
      {type === 'camera' && <CameraScreen />}
      {type === 'qr-code' && <QrCodeScreen />}
    </View>  
  )
};

const styles = StyleSheet.create({
  header_text_style: {
    fontFamily: 'Coolvetica',
    fontSize: 20
  },
  btn_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10
  },
  btn_style: {
    backgroundColor: btnColors.primary,
    borderRadius: 10,
    width: '75%',
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  text_style: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Coolvetica',
    fontSize: 18
  }
});

export default Page;
