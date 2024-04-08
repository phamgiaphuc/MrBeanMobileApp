import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera/next';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const CameraScreen = () => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

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

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing as CameraType}>
        <View
          style={{
            position: 'absolute',
            bottom: 40,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'row',
            gap: 10
          }}
        >
          <TouchableOpacity onPress={toggleCameraFacing} style={{padding: 10, backgroundColor: 'white', borderRadius: 50}}>
            <Ionicons name="camera" size={32} color="black" /> 
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleCameraFacing} style={{padding: 10, backgroundColor: 'white', borderRadius: 50}}>
            <MaterialIcons name="cameraswitch" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
});

export default CameraScreen;
