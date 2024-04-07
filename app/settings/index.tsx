import { View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import ProfileAvatar from '@/components/setting/ProfileAvatar';
import DetailsInfo from '@/components/setting/DetailsInfo';
import BackButton from '@/components/buttons/BackButton';

const Page = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Stack.Screen 
        options={{
          headerTitle: 'Settings',
          headerLeft: () => {
            return <BackButton />
          }
        }}
      />
      <ProfileAvatar avatarSource={require('@/assets/images/avatar/img.png')} />
      <DetailsInfo />
    </View>
  )
}

export default Page