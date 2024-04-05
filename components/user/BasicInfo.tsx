import { imageColors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BasicInfo = ({ avatarSource, name }: { avatarSource: any; name: any }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
      <Image source={avatarSource} style={styles.avatar} />
      <View style={styles.textcontainer}>
        <Text style={styles.name}>Hello, {name}</Text>
        <Text style={styles.premiumtext}>Premium Subcription</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 78,
    height: 78,
    borderRadius: 50,
    marginRight: 5,
    borderColor: imageColors.primary,
    borderWidth: 2,
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    fontFamily: 'Coolvetica',
    color: 'black',
  },
  textcontainer: {
    flexDirection: 'column',
    padding: 14,
  },
  premiumtext: {
    fontSize: 20,
    fontFamily: 'Coolvetica',
    fontStyle: 'normal',
    fontWeight: '800',
    color: '#193D54',
  },
});

export default BasicInfo;
