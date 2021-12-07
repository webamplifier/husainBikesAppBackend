import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { Entypo, Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';

const ProfileInformation = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    return (
        <View style={{ backgroundColor: 'white', borderTopColor: 'grey', borderTopWidth: 0.5, height: '100%' }}>
            <ScrollView>
                <Image style={{ width: '100%', height: 160 }} source={require('../assets/banner-orange.jpg')} />
                <View style={styles.profile_view}>
                    <AntDesign name="user" size={45} color="black" />
                    <View style={styles.dot_view}>

                    </View>
                </View>

                <View style={{ paddingHorizontal: 16 }}>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 6, flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="user" size={21} color="darkslategrey" />
                        <TextInput keyboardType="default" style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Full Name" value={name} onChangeText={setName} />
                    </View>


                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 3, flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="email" size={21} color="darkslategrey" />
                        <TextInput keyboardType="email-address" style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Email" value={email} onChangeText={setEmail} />
                    </View>

                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 3, flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 name="mobile-alt" size={21} color="black" />
                        <TextInput keyboardType="number-pad" style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Mobile Number" value={email} onChangeText={setEmail} />
                    </View>

                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 3, flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name="unlock" size={21} color="black" />
                        <TextInput secureTextEntry={true} style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Password" value={password} onChangeText={setPassword} />
                    </View>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 3, flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 name="building" size={21} color="black" />
                        <TextInput style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Company Name" value={password} onChangeText={setPassword} />
                    </View>

                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={{ borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', elevation: 5, marginTop: (Dimensions.get('window').height / 100) * 3, paddingVertical: 15, width: (Dimensions.get('window').width / 100) * 35 }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>Submit </Text>
                                <AntDesign name="arrowright" size={20} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: (Dimensions.get('window').height / 100) * 10,
        left: (Dimensions.get('window').width / 100) * 35,
    },
    dot_view: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'lightgreen',
        borderWidth: 2,
        borderColor: 'white',
        position: 'absolute',
        right: 5,
        bottom: 15
    }
})