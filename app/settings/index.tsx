import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Stack.Screen 
        options={{
          headerTitle: 'Settings',
          headerBackTitle: 'Back'
        }}
      />
      <Text>Settings Page</Text>
    </View>
  )
}

export default Page