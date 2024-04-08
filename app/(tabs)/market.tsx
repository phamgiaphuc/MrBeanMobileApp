import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ProductCard from '@/components/markets/ProductCard'
import { productsData } from '@/data/productsData'

const Page = () => {
  return (
    <ScrollView style={{paddingHorizontal: 10}} showsVerticalScrollIndicator={false}>
      <Text style={styles.brandStyle}>Coffee Products</Text>
      <View style={styles.container}>
        {
          productsData.map((item) => item.brand === 'coffee-grounds' && <ProductCard key={item.id} item={item} />)
        }
      </View>
      <Text style={styles.brandStyle}>Starbucks Products</Text>
      <View style={styles.container}>
        {
          productsData.map((item) => item.brand === 'starbucks' && <ProductCard key={item.id} item={item} />)
        }
      </View>
      <Text style={styles.brandStyle}>Highlands Products</Text>
      <View style={styles.container}>
        {
          productsData.map((item) => item.brand === 'highlands' && <ProductCard key={item.id} item={item} />)
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  brandStyle: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10, 
    textAlign: 'left',
    fontFamily: 'Coolvetica'
  }
})

export default Page