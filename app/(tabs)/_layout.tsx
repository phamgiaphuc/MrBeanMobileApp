import React from 'react'
import { Link, Tabs, useRouter } from 'expo-router'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native';

const _layout = () => {
  const router = useRouter();
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'black',
      tabBarStyle: {
        borderTopColor: 'black',
        borderTopWidth: 2
      }
    }}>
      <Tabs.Screen name='index' options={{
        tabBarLabel: 'Home',
        headerTitle: 'MrBean - All Effort for Greenier Days',
        headerTitleStyle: {
          fontFamily: 'Coolvetica',
          fontSize: 20
        },
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
        }
      }}/>
      <Tabs.Screen name='market' options={{
        tabBarLabel: 'Market',
        headerTitle: 'Buying Greens, Living Green',
        headerTitleStyle: {
          fontFamily: 'Coolvetica',
          fontSize: 20
        },
        headerStyle: {
          backgroundColor: '#79FF62',
          borderBottomColor: 'black',
          borderBottomWidth: 2
        },
        tabBarIcon: ({focused, color, size}) => {
          return <MaterialCommunityIcons name={focused ? 'coffee' : 'coffee-outline'} color={color} size={size} />
        }
      }}/>
      <Tabs.Screen name='camera' options={{
        headerTitle: 'Camera',
        headerTitleStyle: {
          fontFamily: 'Coolvetica',
          fontSize: 20
        },
        tabBarLabel: 'Camera',
        tabBarIcon: ({focused, color, size}) => {
          return (
            <View style={{backgroundColor: '#79FF62', padding: 12, position: 'absolute', bottom: 4, borderRadius: 10, borderColor: 'black', borderWidth: 2}}>
              <Ionicons name={focused ? 'camera' : 'camera-outline'} color={'black'} size={size} />
            </View>
          )
        }
      }}/>
      <Tabs.Screen name='gemini' options={{
        headerTitle: 'Gemini AI',
        headerTitleStyle: {
          fontFamily: 'Coolvetica',
          fontSize: 20
        },
        tabBarLabel: 'Gemini',
        tabBarIcon: ({focused, color, size}) => {
          return <MaterialCommunityIcons name={focused ? 'account-question' : 'account-question-outline'} color={color} size={size} />
        }
      }}/>
      <Tabs.Screen name='user' options={{
        headerTitle: 'User profile',
        headerTitleStyle: {
          fontFamily: 'Coolvetica',
          fontSize: 20
        },
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