import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { ProductProps } from '@/props/product/ProductProps'

type ProductCardProps = {
  item: ProductProps
}

const ProductCard = ({item}: ProductCardProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(`/products/${item.id}`)} style={{backgroundColor: 'white', borderRadius: 10, maxWidth: '50%', borderColor: 'black', borderWidth: 2}}>
      <Image source={{uri: item.image}} style={{width: '100%', aspectRatio: 1, borderTopRightRadius: 8, borderTopLeftRadius: 8, overflow: 'hidden'}} />
      <View style={{padding: 10, gap: 5}}>
        <Text numberOfLines={1} style={{fontSize: 16}}>{item.title}</Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>${item.price}</Text>
          <Text style={{fontSize: 14}}>/{item.type || 'piece'}</Text>
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
  )
}

export default ProductCard