import { markers } from '@/data/markersData';
import { Ionicons } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera/next';
import { useState } from 'react';
import { Button, Image, ImageProps, StyleSheet, Text, View } from 'react-native';

const QrCodeScreen = () => {
  const [type, setType] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedValue, setScannedValue] = useState(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setScannedValue(data);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', gap: 5}}>
        <Ionicons name="qr-code-outline" size={32} color="black" />
        <Text style={styles.text}>Scan your qr code here</Text>
      </View>
      <View style={{ padding: 10, borderColor: 'black', borderWidth: 2 }}>
        <CameraView
          style={styles.camera}
          facing={type as CameraType}
          zoom={0.025}
          onBarcodeScanned={handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['qr']
          }}
        />
      </View>
      {
        scannedValue 
        && (
          markers.map((location) => {
            if (location.id === +scannedValue) {
              return (
                <View style={{ backgroundColor: 'white', padding: 10, marginHorizontal: 18, borderColor: 'black', borderWidth: 2, flexDirection: 'row', gap: 8}}>
                  <Image source={location?.image as ImageProps} style={{ width: 56, height: 56 }} resizeMode='contain'/>
                  <View style={{ gap: 5, justifyContent: 'center' ,flex: 1}}>
                    <Text style={{ fontSize: 20, fontFamily: 'Coolvetica' }}>{location?.name}</Text>
                    <Text numberOfLines={2} style={{ textTransform: 'capitalize' }}>
                      {location?.address}
                    </Text>
                  </View>
                </View> 
              )
            }
          })
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  camera: {
    width: '90%',
    aspectRatio: 1,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Coolvetica',
  },
});

export default QrCodeScreen;
