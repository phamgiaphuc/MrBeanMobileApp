import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import BackButton from '@/components/buttons/BackButton';

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen 
        options={{
          headerTitle: 'News',
          headerTitleStyle: {
            fontFamily: 'Coolvetica',
            fontSize: 20
          },
          headerLeft: () => <BackButton />
        }}
      />
      <Text>News Page at {id}</Text>
    </View>
  )
}

export default Page