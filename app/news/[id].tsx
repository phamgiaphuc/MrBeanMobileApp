import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import BackButton from '@/components/buttons/BackButton';

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <ScrollView>
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
      <Image source={{uri: 'https://assets.epicurious.com/photos/63e54a0664e14d52936a2937/4:3/w_3764,h_2823,c_limit/CoffeeSubscriptions_IG_V1_030922_6350_V1_final.jpg'}} style={{aspectRatio: 16/10}}/>
      <View style={{paddingHorizontal: 20, marginVertical: 10, flexDirection: 'column', gap: 10}}>
        <Text style={{fontFamily: 'Coolvetica', fontSize: 32}}>Farmers profit on record coffee bean prices</Text>
        <Text style={{marginBottom: 10}}>By <Text style={{fontWeight: 'bold'}}>Thi Ha</Text> January 18, 2024 | 07:54 am GMT+7</Text>
        <Text style={{fontSize: 18, marginBottom: 10, textAlign: 'left'}}>Farmers in Central Highlands, Vietnam's largest coffee-producing region, have experienced a profitable year, with coffee earnings surpassing those of paddy farming by 2-4 times, buoyed by record-breaking coffee bean prices.</Text>
        <Image source={{uri: 'https://i1-english.vnecdn.net/2024/01/18/1-1705514770-1705514788-7390-1705514794.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=I1Eg_zS5b4MNXBWi0FZjnA'}} style={{aspectRatio: 3/2}}/>
        <Text style={{marginBottom: 10, textAlign: 'center'}}>Farmers in Central Highlands province of Gia Lai harvest coffee. Photo by Duc Hoa</Text>
        <Text style={{fontSize: 18, marginBottom: 10, textAlign: 'left'}}>The price of coffee has escalated to VND70.8-71 million (US$2,885-2,893) per ton, surging from VND70 million last July.</Text>
        <Text style={{fontSize: 18, marginBottom: 10, textAlign: 'left'}}>Coffee grower Hai from Kon Tum province sold her six tons of coffee beans for VND71 million per ton, an 80% rise from the previous year.</Text>
        <Text style={{fontSize: 18, marginBottom: 10, textAlign: 'left'}}>I had planned to sell during Tet (Lunar New Year) in February, but the offered price led me to sell earlier," she explained.</Text>
        <Text style={{fontSize: 18, marginBottom: 10, textAlign: 'left'}}>Similarly, Lan, a coffee farmer from Gia Lai province, sold her beans for VND70.8 million per ton. "I was surprised that prices remained high during the harvest season," she said.</Text>
        <Text style={{fontSize: 18, marginBottom: 10, textAlign: 'left'}}>The Agriculture and Rural Development Departments of these provinces report that these high prices have yielded profits of VND120–200 million per hectare for coffee farmers, an increase of VND60–80 million from the last season.</Text>
        <Text style={{fontSize: 18, marginBottom: 10, textAlign: 'left'}}>Globally, March robusta coffee LRCc2 rose 5.3% to $3,145 a ton, having hit its highest in at least 16 years at $3,147 as Vietnam farmers delay deliveries of pre-sold beans while Red Sea shipping attacks slow deliveries to Europe, according to Reuters.</Text>
        <Text style={{fontSize: 18, marginBottom: 10, textAlign: 'left'}}>March arabica coffee KCc1rose 3% to $1.8540 per lb.</Text>
        <Text style={{fontSize: 18, marginBottom: 10, textAlign: 'left'}}>The Vietnam Coffee and Cocoa Association forecasts a decrease in the country's coffee production to 1.6–1.7 million tons in the 2023–2024 crop year, down from 1.78 million tons in the previous year.</Text>
      </View>
    </ScrollView>
  )
}

export default Page