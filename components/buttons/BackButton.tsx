import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const BackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => {
      router.back();
    }} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <Ionicons name="chevron-back-sharp" size={24} color="black" />
      <Text style={{ fontSize: 16 }}>Back</Text>
    </TouchableOpacity>
  )
}

export default BackButton