import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import AdsCarousel from '@/components/carousels/AdsCarousel'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { btnColors } from '@/constants/Colors'

const Page = () => {
  const router = useRouter();

  const serviceNav = [
    {
      title: 'Give Beans',
      icon: <MaterialCommunityIcons name="leaf" size={24} color="white" />,
      // location: '/beans/form'
      location: ''
    },
    {
      title: 'Find Locations',
      icon: <MaterialIcons name="location-on" size={24} color="white" />,
      location: '/beans/map'
    },
    {
      title: 'Buy Beans',
      icon: <MaterialCommunityIcons name="coffee-outline" size={24} color="white" />,
      location: '/(tabs)/market'
    },
    {
      title: 'Gemini AI',
      icon: <MaterialCommunityIcons name="account-question" size={24} color="white" />,
      location: '/(tabs)/gemini'
    },
  ]

  return (
    <View>
      <ScrollView>
        <AdsCarousel />
        <Text style={{fontSize: 24, fontFamily: 'Coolvetica', fontWeight: 'bold', marginVertical: 10, marginLeft: 20, textAlign: 'left'}}>Choose service</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginHorizontal: 5, gap: 10}}>
          {
            serviceNav.map((service, index) => (
              <TouchableOpacity key={index} onPress={() => router.push(service.location)} style={styles.btn_style}>
                {service.icon}
                <Text style={styles.text_style}>{service.title}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <Text style={{fontSize: 24, fontFamily: 'Coolvetica', fontWeight: 'bold', marginVertical: 10, marginLeft: 20, textAlign: 'left'}}>Latest news</Text>
        <View style={{display: 'flex', flexDirection: 'column', marginHorizontal: 10, gap: 10, marginBottom: 10}}>
          {
            Array(5).fill(0).map((_, index) => {
              return (
                <TouchableOpacity onPress={() => router.push(`/news/${index}`)} key={index} style={{display: 'flex', flexDirection: 'row', padding: 5, borderRadius: 10, borderColor: 'black', borderWidth: 2, gap: 10}}>
                  <Image source={{uri: 'https://assets.epicurious.com/photos/63e54a0664e14d52936a2937/4:3/w_3764,h_2823,c_limit/CoffeeSubscriptions_IG_V1_030922_6350_V1_final.jpg'}} style={{aspectRatio: 1, width: 128, borderRadius: 8}}/>
                  <View style={{display: 'flex', justifyContent: 'space-evenly', flex: 1}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', fontFamily: 'Coolvetica'}}>Farmers profit on record coffee bean prices</Text>
                    <Text style={{fontSize: 14}}>January 18, 2024</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  btn_style: {
    backgroundColor: btnColors.primary,
    borderRadius: 10,
    width: '45%',
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  text_style: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Coolvetica',
    fontSize: 18
  }
})

export default Page