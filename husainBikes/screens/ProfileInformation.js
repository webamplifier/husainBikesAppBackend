import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ProfileInformation = () => {
    return (
        <View style={{ backgroundColor: 'white', borderTopColor: 'grey', borderTopWidth: 0.5, height: '100%' }}>
            <Image style={{ width: '100%', height: 160 }} source={require('../assets/banner-orange.jpg')} />
            <View style={styles.profile_view}>
                <AntDesign name="user" size={45} color="black" />
                <View style={styles.dot_view}>

                </View>
            </View>
        </View>
    )
}

export default ProfileInformation
const styles = StyleSheet.create({
    profile_view: {
        borderRadius: 70,
        backgroundColor: 'ghostwhite',
        width: 110,
        height: 110,
        justifyContent:'center',
        alignItems :'center',
        position : 'absolute',
        top : (Dimensions.get('window').height/100) * 10,
        left : (Dimensions.get('window').width/100) * 35,
    },
    dot_view : {
        width : 20,
        height : 20,
        borderRadius : 50,
        backgroundColor : 'lightgreen',
        borderWidth : 2,
        borderColor : 'white',
        position : 'absolute',
        right : 5,
        bottom : 15
    }
})