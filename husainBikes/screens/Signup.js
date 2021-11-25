import React from 'react'
import { View, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';

const Signup = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    return (
        <>
            <View style={{ flex: 1, marginTop: (Dimensions.get('window').height / 100) * 30, marginHorizontal: (Dimensions.get('window').width / 100) * 10 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Signup</Text>

                <Text style={{ color: 'darkslategrey', fontWeight: 'bold', fontSize: 15, marginTop: 8, marginBottom: 15 }}>Please sign up to continue</Text>

                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 6, flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo name="user" size={21} color="darkslategrey" />
                    <TextInput keyboardType="default" style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Full Name" value={name} onChangeText={setName} />
                </View>


                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 3, flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo name="email" size={21} color="darkslategrey" />
                    <TextInput keyboardType="email-address" style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Email" value={email} onChangeText={setEmail} />
                </View>

                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 3, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="unlock" size={21} color="black" />
                    <TextInput secureTextEntry={true} style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Password" value={password} onChangeText={setPassword} />
                </View>

                <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <View style={{ borderRadius:50,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange',elevation:5, marginTop: (Dimensions.get('window').height / 100) * 3, paddingVertical: 15, width: (Dimensions.get('window').width / 100) * 35 }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>Signup </Text>
                            <AntDesign name="arrowright" size={20} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: (Dimensions.get('window').height / 100) * 17 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', letterSpacing: 1 }}>Already have an account
                        <Text onPress={() => props.navigation.navigate("Login")} style={{ color: 'orange' }}> Login</Text>
                    </Text>
                </View>
            </View>


        </>
    )
}

export default Signup
