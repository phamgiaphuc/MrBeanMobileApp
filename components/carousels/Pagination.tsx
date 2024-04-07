import { View, Text, Animated, Dimensions, StyleSheet } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('screen');

const Pagination = ({ data, scrollX, currentIndex }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
      {data.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.1],
          extrapolate: 'clamp',
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', '#000', '#ccc'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index}
            style={[styles.dot, { width: dotWidth ,backgroundColor }]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#ccc',
    width: 10,
    height: 10,
    borderRadius: 6,
  },
  dotActive: {
    backgroundColor: '#000',
  },
});

export default Pagination;
