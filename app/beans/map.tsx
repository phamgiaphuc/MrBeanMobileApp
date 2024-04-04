import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Stack.Screen 
        options={{
          headerTitle: 'Bean Map',
          headerBackTitle: 'Back'
        }}
      />
      <Text>Map Page</Text>
    </View>
  )
}

export default Page