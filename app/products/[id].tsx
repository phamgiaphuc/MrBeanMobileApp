import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { productsData } from '@/data/productsData';
import BackButton from '@/components/buttons/BackButton';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { btnColors } from '@/constants/Colors';

const Page = () => {
  const { id } = useLocalSearchParams();
  const product = productsData.find((item) => item.id === id);
  return (
    <View style={{flex: 1}}>
      <Stack.Screen 
        options={{
          headerShown: false
        }}
      />
      <Image source={{uri: product?.image}} style={{width: '100%', aspectRatio: 1/1.10}}/>
      <View style={{position: 'absolute', left: 14, top: 56}}>
        <BackButton />
      </View>
      <View style={{paddingHorizontal: 20, paddingVertical: 10, gap: 8, flex: 1}}>
        <View style={{flexDirection:'row', gap: 8, alignItems: 'center', marginVertical: 8, flexWrap: 'wrap'}}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>{product?.title}</Text>
          {product?.isHot && <Text style={{padding: 5, backgroundColor: '#79FF62'}}>Hot product</Text>}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 32, fontFamily: 'Coolvetica'}}>${product?.price}</Text>
            <Text style={{fontSize: 22}}>/{product?.type || 'piece'}</Text>
          </View>
          <View style={{flexDirection: 'column', gap: 2}}>
            <View style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}>
              <Text style={{fontFamily: 'Coolvetica'}}>Stars: </Text>
              {
                Array(5).fill(0).map((_, index) => {
                  if (product?.stars && index < product?.stars) {
                    return <AntDesign key={index} name="star" size={14} color="#e1b12c" />
                  } else {
                    return <AntDesign key={index} name="star" size={14} color="gray" />
                  }
                })
              }
            </View>
            <View style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}>
              <Text style={{fontFamily: 'Coolvetica'}}>Solds:</Text>
              <Text>1000+</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{padding: 10, borderRadius: 10, backgroundColor: btnColors.primary, justifyContent: 'center', alignItems: 'center', gap: 5, flexDirection: 'row', marginTop: 16}}>
          <Ionicons name="cart-outline" size={24} color="white" />
          <Text style={{color: 'white', fontFamily: 'Coolvetica', fontSize: 18}}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Page