import React from 'react'
import { View, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';

const Login = (props) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <>
            <View style={{ flex: 1, marginTop: (Dimensions.get('window').height / 100) * 30, marginHorizontal: (Dimensions.get('window').width / 100) * 10 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Login</Text>

                <Text style={{ color: 'darkslategrey', fontWeight: 'bold', fontSize: 15, marginTop: 8, marginBottom: 15 }}>Please sign in to continue</Text>

                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 6, flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo name="email" size={21} color="darkslategrey" />
                    <TextInput keyboardType="email-address" style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Email" value={email} onChangeText={setEmail} />
                </View>

                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 3, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="unlock" size={21} color="black" />
                    <TextInput secureTextEntry={true} style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Password" value={password} onChangeText={setPassword} />
                </View>

                <Text onPress={() => props.navigation.navigate("ForgotPasswordEmail")} style={{ textAlign: 'right', marginTop: 10, fontWeight: 'bold' }}>Forgot Password</Text>

                <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <View style={{ borderRadius:50,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange',elevation:5, marginTop: (Dimensions.get('window').height / 100) * 3, paddingVertical: 15, width: (Dimensions.get('window').width / 100) * 35 }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>Login </Text>
                            <AntDesign name="arrowright" size={20} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: (Dimensions.get('window').height / 100) * 20 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', letterSpacing: 1 }}>Don't have an account
                        <Text onPress={() => props.navigation.navigate("Home")} style={{ color: 'orange' }}> SignUp</Text>
                    </Text>
                </View>
            </View>


        </>
    )
}

export default Login
