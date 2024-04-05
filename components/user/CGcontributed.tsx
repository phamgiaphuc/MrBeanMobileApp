import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const CGcontributed = ({contributed, earned, times}: {contributed: any, earned: any, times: any}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 10,}}>
            <View>
                <Text style={styles.contributed}>{contributed}g</Text>
                <Text style={styles.contributedtext}>CGcontributed</Text>
            </View>
            <View style={styles.verticalline}></View>
            <View>
                <View>
                    <Text style = {styles.earned}>{earned}$</Text>
                    <Text style = {styles.earnedtext}>earned</Text>
                </View>
                <View style={{marginTop: 15,}}>
                    <Text style = {styles.times}>{times}</Text>
                    <Text style={styles.timestext}>times</Text>
                </View>
            </View>
        </View>
    )
}

export default CGcontributed;

const styles = StyleSheet.create({
    contributed: {
        color: '#193D54',
        fontFamily: 'Coolvetica',
        fontSize: 96,
        fontStyle: 'normal',
        fontWeight: '800',
    },
    contributedtext: {
        color: 'black',
        fontFamily: 'Coolvetica',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '800',
        marginTop: -15,
    },
    verticalline: {
        width: 119.5,
        height: 1,
        transform: [{rotate: '90deg'}],
        backgroundColor: 'black',
        marginLeft: -30,
        marginRight: -30,
    },
    earned: {
        color: '#193D54',
        fontFamily: 'Coolvetica',
        fontSize: 38,
        fontStyle: 'normal',
        fontWeight: '800',
    },
    earnedtext: {
        color: '#000',
        fontFamily: 'Coolvetica',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '800',
        marginTop: -10
    },
    times: {
        color: '#193D54',
        fontFamily:'Coolvetica',
        fontSize: 38,
        fontStyle: 'normal',
        fontWeight: '800',
    },
    timestext: {
        color: '#000',
        fontFamily: 'Coolvetica',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '800',
        marginTop: -10
    }
})