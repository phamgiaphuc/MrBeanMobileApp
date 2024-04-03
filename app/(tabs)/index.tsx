import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import AdsCarousel from '@/components/carousels/AdsCarousel'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Page = () => {
  const router = useRouter();
  return (
    <View style={{marginTop: 64}}>
      <Text style={{fontSize: 20, fontWeight: '600', marginHorizontal: 10, marginBottom: 10, textAlign: 'center'}}>MrBean - All Effort for Greenier Days</Text>
      <ScrollView>
        <AdsCarousel />
        <Text style={{fontSize: 24, fontWeight: 'bold', marginVertical: 10, marginLeft: 20, textAlign: 'left'}}>Choose service</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
          <View style={{backgroundColor: '#18181B', marginVertical: 5, borderRadius: 8, padding: 12, width: '45%', justifyContent: 'center'}}>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', gap: 4}}>
              <MaterialCommunityIcons name="leaf" size={24} color="white" style={{marginRight: 5}} />
              <Text style={{ color: 'white', fontWeight: '400', textAlign: 'center', fontSize: 18 }}>Give Beans</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#18181B', marginVertical: 5, borderRadius: 8, padding: 12, width: '45%', justifyContent: 'center'}}>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', gap: 4}}>
              <MaterialIcons name="location-on" size={24} color="white" />
              <Text style={{ color: 'white', fontWeight: '400', textAlign: 'center', fontSize: 18 }}>Find Locations</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#18181B', marginVertical: 5, borderRadius: 8, padding: 12, width: '45%', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => router.push('/(tabs)/market')} style={{flexDirection: 'row', justifyContent: 'center', gap: 4}}>
              <MaterialCommunityIcons name="coffee-outline" size={24} color="white" />
              <Text style={{ color: 'white', fontWeight: '400', textAlign: 'center', fontSize: 18 }}>Buy Beans</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#18181B', marginVertical: 5, borderRadius: 8, padding: 12, width: '45%', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => router.push('/(tabs)/gemini')} style={{flexDirection: 'row', justifyContent: 'center', gap: 4}}>
              <MaterialCommunityIcons name="account-question" size={24} color="white" />
              <Text style={{ color: 'white', fontWeight: '400', textAlign: 'center', fontSize: 18 }}>Gemini AI</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginVertical: 10, marginLeft: 20, textAlign: 'left'}}>Latest news</Text>
        <View style={{display: 'flex', flexDirection: 'column', marginHorizontal: 10, gap: 10}}>
          {
            Array(5).fill(0).map((_, index) => {
              return (
                <TouchableOpacity onPress={() => router.push(`/news/${index}`)} key={index} style={{display: 'flex', flexDirection: 'row', padding: 4, borderRadius: 8, borderColor: 'black', borderWidth: 2, gap: 10}}>
                  <Image source={{uri: 'https://assets.epicurious.com/photos/63e54a0664e14d52936a2937/4:3/w_3764,h_2823,c_limit/CoffeeSubscriptions_IG_V1_030922_6350_V1_final.jpg'}} style={{aspectRatio: 1, width: 128, borderRadius: 8}}/>
                  <View style={{display: 'flex', flexDirection: 'column', flex: 1}}>
                    <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold'}}>Farmers profit on record coffee bean prices</Text>
                    <Text style={{flex: 1, fontSize: 14}}>January 18, 2024</Text>
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

export default Page