import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const ExchangeMap = ({mapSource}: {mapSource: any}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
            <Text style={styles.text}>Nearby Exchange Partners</Text>
            <Image source={mapSource} style={styles.mapimg} />
        </View>
    )
}

export default ExchangeMap;

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontFamily: 'Coolvetica',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '800'
    },
    mapimg: {
        marginTop: 10,
        width: 361,
        height: 191,
        borderRadius: 19,
        borderWidth: 1,
        borderColor: 'black',
    }
})