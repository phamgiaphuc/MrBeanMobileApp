import React from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";


const ProfileAvatar = ({avatarSource}: {avatarSource: any[]}) => {
    return (
        <View style={{marginTop: 10, justifyContent:'center', alignItems: 'center'}}>
            <Image source={avatarSource} style={styles.image}></Image>
                <Pressable onPress={() => alert('Button with adjusted color pressed')} /*</View>style={styles.button}*/>
                    <Text style={styles.text}>Edit profile image</Text>
                </Pressable>
        </View>
    )
}

export default ProfileAvatar;

const styles=StyleSheet.create({
    image: {
        height: 64,
        width: 64,
        borderRadius: 50,
        marginBottom: 12,
    },
    // // button: {
    // //     color:'#0D9FF',
    // },
    text: {
        color:'#0D99FF',
        textAlign: 'center',
        fontFamily:'Coolvetica',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight:'900'
    }
})