import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Stack.Screen 
        options={{
          headerTitle: 'Bean Form',
          headerBackTitle: 'Back'
        }}
      />
      <Text>Form Page</Text>
    </View>
  )
}

export default Page