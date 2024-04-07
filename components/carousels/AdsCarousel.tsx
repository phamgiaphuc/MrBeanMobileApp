import { Animated, View, FlatList, useWindowDimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { adsCarousel } from '@/data/adsCarousel';
import AdCarouselCard from '../cards/AdCarouselCard';

const AdsCarousel = () => {
  const flatListRef = useRef<FlatList>(null); // Adjust type accordingly
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === adsCarousel.length - 1) {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true
        })
      } else {
        flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true
        })
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleOnScroll = (event) => {
    const scrollPostion = event.nativeEvent.contentOffset.x;
    const index = scrollPostion / width;
    setActiveIndex(Math.floor(index));
  }

  const getItemLayout = (data, index) => ({
		length: width,
		offset: width * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
		index: index,
	});

  return (
    <View>
      <FlatList
        data={adsCarousel}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => <AdCarouselCard item={item} index={index} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={handleOnScroll}
      />
      <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
        {adsCarousel.map((_, index) => {
          if (activeIndex === index) {
            return <Animated.View key={index} style={{backgroundColor: 'black', height: 10, width: 20, borderRadius: 5}}></Animated.View>
          } else {
            return <Animated.View key={index} style={{backgroundColor: 'gray', height: 10, width: 10, borderRadius: 5}}></Animated.View>
          }
        })}
      </View>
    </View>
  );
};

export default AdsCarousel;
