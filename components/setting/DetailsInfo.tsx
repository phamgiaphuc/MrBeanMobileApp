import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DetailsInfo = () => {
  return (
    <View style={{ marginTop: 66, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container_1}>
        <Text style={styles.container_2}>Name</Text>
        <Text style={styles.container_3}>Thành Danh</Text>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="#828282" />
      </View>
      <View style={styles.container_1}>
        <Text style={styles.container_2}>Username</Text>
        <Text style={styles.container_3}>@ThanhDanh2024</Text>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="#828282" />
      </View>
      <View style={styles.container_1}>
        <Text style={styles.container_2}>Email</Text>
        <Text style={styles.container_3}>thanhdanh@mail.com</Text>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="#828282" />
      </View>
      <View
        style={{
          marginTop: 14,
          flexDirection: 'row',
          height: 144,
          width: 375,
          alignItems: 'flex-start',
          justifyContent: 'center' /*backgroundColor:'red',*/,
        }}
      >
        <Text style={styles.container_2}>Links</Text>
        <View style={{gap: 12}}>
          <Text style={styles.container_3}>website.net</Text>
          <Text style={styles.container_3}>mylink.net</Text>
          <Text style={styles.container_3}>yourlink.net</Text>
          <Text
            style={{
              color: '#828282',
              fontFamily: 'Coolvetica',
              fontSize: 14
            }}
          >
            + Add link
          </Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="transparent" />
      </View>
      <View style={styles.container_1}>
        <Text style={styles.container_2}>Bio</Text>
        <Text style={styles.container_3}>A description of this user.</Text>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="#828282" />
      </View>
    </View>
  );
};

export default DetailsInfo;

const styles = StyleSheet.create({
  container_1: {
    flexDirection: 'row',
    height: 48,
    width: 375,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_2: {
    width: 100,
    color: '#000',
    fontFamily: 'Coolvetica',
    fontSize: 16
  },
  container_3: {
    width: 211,
    color: '#000',
    fontFamily: 'Coolvetica',
    fontSize: 16
  }
});
