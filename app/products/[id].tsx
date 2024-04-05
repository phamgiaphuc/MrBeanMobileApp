import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen 
        options={{
          headerTitle: 'Product',
          headerBackTitle: 'Back'
        }}
      />
      <Text>Product Page at {id}</Text>
    </View>
  )
}

export default Page