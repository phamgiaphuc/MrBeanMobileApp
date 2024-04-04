import { View, Text, FlatList, SafeAreaView, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Page = () => {
  const data = [
    {
      id: '1',
      title: 'Coffee grounds cup',
      image: 'https://biopolymer.vn/wp-content/uploads/2022/09/summary-768x768.jpg',
      price: '0.14-0.17',
      stars: 5
    },
    {
      id: '2',
      title: 'Coffee fertilizer',
      image: 'https://s.alicdn.com/@sc04/kf/H9b4687a8b5da423785eb1e167d675ca6B.jpg',
      price: '1.00',
      stars: 4
    },
    {
      id: '3',
      title: 'Coffee bag',
      image: 'https://s.alicdn.com/@sc04/kf/H1d249076971c4701bc0566646cc2a8fe1.jpg',
      price: '0.20-0.25',
      stars: 4
    },
    {
      id: '4',
      title: 'Coffee ground cups',
      image: 'https://materialdistrict.com/wp-content/uploads/2018/12/best-of-2018-coffee-cups-coffee-grounds-materialdistrict-1.jpg',
      price: '0.65',
      stars: 5
    },
    {
      id: '5',
      title: 'Coffee lamps',
      image: 'https://www.jeremyriad.com/wp-content/uploads/2012/06/decafe3.jpg',
      price: '29.99',
      stars: 5
    },
    {
      id: '6',
      title: 'Coffee spoons and forks',
      image: 'https://dtcapi.serverdtc.com/storage/blog-images/13.Zero-Waste-Cutlery-Set-Made-from-Coffee-Grounds_20220919222540.jpg',
      price: '9.99',
      stars: 4
    }
  ]

  const router = useRouter();

  return (
    <SafeAreaView style={{margin: 10}}>
      <FlatList contentContainerStyle={{gap: 10, marginVertical: 10, paddingBottom: 10}} columnWrapperStyle={{gap: 10}} numColumns={2} keyExtractor={(item) => item.id} data={data} renderItem={({item}) => (
        <TouchableOpacity onPress={() => router.push(`/products/${item.id}`)} style={{backgroundColor: 'white', borderRadius: 10, flex: 1, maxWidth: '50%', borderColor: 'black', borderWidth: 2}}>
          <Image source={{uri: item.image}} style={{width: '100%', aspectRatio: 1, borderTopRightRadius: 8, borderTopLeftRadius: 8, overflow: 'hidden'}} />
          <View style={{padding: 10, gap: 5}}>
            <Text numberOfLines={1} style={{fontSize: 16}}>{item.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>${item.price}</Text>
              <Text style={{fontSize: 14}}>/ peice</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 2}}>
              {
                Array(5).fill(0).map((_, index) => {
                  if (index < item.stars) {
                    return <AntDesign name="star" size={14} color="#e1b12c" />
                  } else {
                    return <AntDesign name="star" size={14} color="black" />
                  }
                })
              }
            </View>
          </View>
        </TouchableOpacity>
      )}/>
    </SafeAreaView>
  )
}

export default Page