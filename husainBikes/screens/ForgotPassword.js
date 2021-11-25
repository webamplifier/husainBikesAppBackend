import React from 'react'
import { View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';

const ForgotPasswordEmail = (props) => {
    const [email, setEmail] = React.useState("");
    return (
        <View style={{ flex: 1, marginTop: (Dimensions.get('window').height / 100) * 30, marginHorizontal: (Dimensions.get('window').width / 100) * 10 }}>
            <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Forgot Password</Text>

            <Text style={{ color: 'darkslategrey', fontWeight: 'bold', fontSize: 15, marginTop: 8, marginBottom: 15 }}>Please enter email to change password</Text>

            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 6, flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name="email" size={21} color="darkslategrey" />
                <TextInput keyboardType="email-address" style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="Email" value={email} onChangeText={setEmail} />
            </View>

            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 10, paddingLeft: 10, marginTop: (Dimensions.get('window').height / 100) * 3, flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name="code" size={21} color="darkslategrey" />
                <TextInput keyboardType="number-pad" style={{ paddingLeft: 10, fontWeight: 'bold', color: 'black', flex: 1 }} placeholder="OTP code" value={email} onChangeText={setEmail} />
            </View>

            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={{ borderRadius:50,elevation:5,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', marginTop: (Dimensions.get('window').height / 100) * 3, paddingVertical: 15, width: (Dimensions.get('window').width / 100) * 35 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>Submit </Text>
                        <AntDesign name="arrowright" size={20} color="white" />
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={{ marginTop: 30, fontWeight: 'bold', fontSize: 12 }}>Note : An email with OTP will be sent to the provided email. Please use that code to verify your email</Text>

            <View style={{ marginTop: (Dimensions.get('window').height / 100) * 18 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', letterSpacing: 1 }}>Don't have an account
                    <Text onPress={() => props.navigation.navigate("Signup")} style={{ color: 'orange' }}> SignUp</Text>
                </Text>
            </View>
        </View>
    )
}

export default ForgotPasswordEmail
