import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ProductCard from '@/components/markets/ProductCard'

const Page = () => {
  const coffeeProducts = [
    {
      id: '1',
      title: 'Coffee grounds cup',
      image: 'https://biopolymer.vn/wp-content/uploads/2022/09/summary-768x768.jpg',
      price: '5.00',
      stars: 5,
      type: 'cup'
    },
    {
      id: '2',
      title: 'Coffee fertilizer',
      image: 'https://s.alicdn.com/@sc04/kf/H9b4687a8b5da423785eb1e167d675ca6B.jpg',
      price: '1.00',
      stars: 4,
      type: 'kg'
    },
    {
      id: '3',
      title: 'Coffee bag',
      image: 'https://s.alicdn.com/@sc04/kf/H1d249076971c4701bc0566646cc2a8fe1.jpg',
      price: '0.20-0.25',
      stars: 4,
      type: 'bag'
    },
    {
      id: '4',
      title: 'Coffee ground cups',
      image: 'https://materialdistrict.com/wp-content/uploads/2018/12/best-of-2018-coffee-cups-coffee-grounds-materialdistrict-1.jpg',
      price: '0.65',
      stars: 5,
      type: 'cup'
    },
    {
      id: '5',
      title: 'Coffee lamps',
      image: 'https://www.jeremyriad.com/wp-content/uploads/2012/06/decafe3.jpg',
      price: '24.99',
      stars: 5,
      type: 'peice'
    },
    {
      id: '6',
      title: 'Coffee spoons and forks',
      image: 'https://dtcapi.serverdtc.com/storage/blog-images/13.Zero-Waste-Cutlery-Set-Made-from-Coffee-Grounds_20220919222540.jpg',
      price: '9.99',
      stars: 4,
      type: 'set'
    }
  ]

  const starbucksProducts = [
    {
      id: '1',
      title: 'Starbucks Caffee Mocha',
      image: 'https://www.starbucksathome.com/vn/sites/default/files/2022-05/Mocha%20PNG_2.png',
      price: '15.00',
      stars: 5
    },
    {
      id: '2',
      title: 'Starbucks Caffee Latte',
      image: 'https://www.starbucksathome.com/vn/sites/default/files/2022-05/Caffe%20Latte%20PNG_2.png',
      price: '15.00',
      stars: 4
    },
    {
      id: '3',
      title: 'Starbucks Caffee Dark Roast',
      image: 'https://www.starbucksathome.com/vn/sites/default/files/2022-06/Rang%20%C4%91%E1%BA%ADm.png',
      price: '19.99',
      stars: 5
    }
  ]

  const highlansProducts = [
    {
      id: '1',
      title: 'Highlands Coffee',
      image: 'https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/RG-TRADITIONAL-1kg-5.1.png',
      price: '10.00',
      stars: 5
    },
    {
      id: '2',
      title: 'Latte Coffee',
      image: 'https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/thumbs/270_crop_CA_PHE_SUA_185ml_v3.jpg',
      price: '0.75',
      stars: 4
    },
    {
      id: '3',
      title: 'Mosaic ceramic cup',
      image: 'https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/Screen_Shot_2018-04-04_at_09.16.18.png',
      price: '2.50',
      stars: 5
    },
    {
      id: '4',
      title: 'Stainless steel filter',
      image: 'https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/Screen_Shot_2018-04-04_at_09.18.39.png',
      price: '0.99',
      stars: 3
    }
  ]

  return (
    <ScrollView style={{paddingHorizontal: 10}} showsVerticalScrollIndicator={false}>
      <Text style={styles.brandStyle}>Coffee Products</Text>
      <View style={styles.container}>
        {
          coffeeProducts.map((item) => <ProductCard key={item.id} item={item} />)
        }
      </View>
      <Text style={styles.brandStyle}>Starbucks Products</Text>
      <View style={styles.container}>
        {
          starbucksProducts.map((item) => <ProductCard key={item.id} item={item} />)
        }
      </View>
      <Text style={styles.brandStyle}>Highlands Products</Text>
      <View style={styles.container}>
        {
          highlansProducts.map((item) => <ProductCard key={item.id} item={item} />)
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