import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign, Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const Profile = (props) => {
    return (
        <View style={{ backgroundColor: 'white', borderTopColor: 'grey', borderTopWidth: 0.5, height: '100%' }}>
            <ScrollView>
                <View style={{ display: 'flex', marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingLeft: 16 }}>
                    <View style={{ borderRadius: 4, elevation: 5, backgroundColor: 'orange', paddingHorizontal: 8, paddingVertical: 10 }}>
                        <AntDesign name="user" size={22} color="white" />
                    </View>
                    <View style={{ paddingLeft: 12 }}>
                        <Text style={{ fontSize: 16, textTransform: 'lowercase', fontWeight: 'bold', color: '#2f4f4f' }}>Alihussain Kabri</Text>
                        <Text style={{ fontSize: 12 }}>alihussainkabri52@gmail.com</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 28, paddingHorizontal: 12 }}>
                    <TouchableOpacity style={styles.card} onPress={()=>props.navigation.navigate("ProfileInformation")}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Entypo name="eye" size={18} color="black" />
                            <Text style={styles.card_text}>Profile Information</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="bike-fast" size={18} color="black" />
                            <Text style={styles.card_text}>Vehicles</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="gear" size={18} color="black" />
                            <Text style={styles.card_text}>Services</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="sign-out" size={18} color="black" />
                            <Text style={styles.card_text}>Sign Out</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    card: {
        paddingVertical: 22,
        paddingHorizontal: 8,
        borderBottomWidth: 0.5,
    },
    card_text: {
        paddingLeft: 22,
        fontWeight: 'bold'
    }
})
