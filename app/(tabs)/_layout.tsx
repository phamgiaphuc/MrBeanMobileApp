import React from 'react'
import { Link, Tabs, useRouter } from 'expo-router'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';

const _layout = () => {
  const router = useRouter();
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'black',
    }}>
      <Tabs.Screen name='index' options={{
        tabBarLabel: 'Home',
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
        }
      }}/>
      <Tabs.Screen name='market' options={{
        tabBarLabel: 'Market',
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          return <MaterialCommunityIcons name={focused ? 'coffee' : 'coffee-outline'} color={color} size={size} />
        }
      }}/>
      <Tabs.Screen name='camera' options={{
        headerTitle: 'Camera',
        tabBarLabel: 'Camera',
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name={focused ? 'camera' : 'camera-outline'} color={color} size={size} />
        }
      }}/>
      <Tabs.Screen name='gemini' options={{
        headerTitle: 'Gemini AI',
        tabBarLabel: 'Gemini',
        tabBarIcon: ({focused, color, size}) => {
          return <MaterialCommunityIcons name={focused ? 'account-question' : 'account-question-outline'} color={color} size={size} />
        }
      }}/>
      <Tabs.Screen name='user' options={{
        headerTitle: 'User profile',
        tabBarLabel: 'User',
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />
        },
        headerRight: () => {
          return (
            <TouchableOpacity style={{marginRight: 10}} onPress={() => router.push('/settings/')}>
              <Ionicons name='settings-outline' size={24}/>
            </TouchableOpacity>
          )
        },
      }}/>
    </Tabs>
  )
}

export default _layout