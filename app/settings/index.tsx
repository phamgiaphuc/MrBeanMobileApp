import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import ProfileAvatar from '@/components/setting/ProfileAvatar';
import DetailsInfo from '@/components/setting/DetailsInfo';

const Page = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <ProfileAvatar avatarSource={require('@/assets/images/avatar/img.png')} />
      <DetailsInfo />
    </View>
  )
}

export default Page