import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RecyclingProducts = ({ productImgSource }: { productImgSource: any[] }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
      <Text style={styles.text}>Recycling Products</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <View style={styles.productsContainer}>
          {productImgSource.map((source, index) => (
            <TouchableOpacity key={index} onPress={() => console.log('Button pressed', index)} style={{ margin: 2.5 }}>
              <Image source={source} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecyclingProducts;

const styles = StyleSheet.create({
  productsContainer: {
    height: 138,
    width: 361,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  text: {
    color: '#000',
    fontFamily: 'Coolvetica',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '800',
    marginVertical: 10,
  },
  image: {
    width: 100,
    flex: 1,
    borderRadius: 10,
  },
  scrollView: {
    height: 138,
    width: 361,
  },
});
