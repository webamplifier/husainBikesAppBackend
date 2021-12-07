import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Vehicles = (props) => {

    const arr = [1, 2, 3, 4, 5, 6];

    const color_arr = ['white', 'ghostwhite']

    function bikeCard(i) {


        return <View key={i} style={{ backgroundColor: i % 2 == 0 ? 'aliceblue' : 'white', marginHorizontal: 16, paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.8 }}>
            <View style={{ width: (Dimensions.get('window').width / 100) * 70,marginLeft:8 }}>
                <Text style={{ marginBottom: 8 }}><Text style={{ fontWeight: 'bold' }}>Bike Name:</Text> Bajaj Pulser 150 cc</Text>
                <Text><Text style={{ fontWeight: 'bold' }}>Number Plate:</Text> RJ 03 SH8958</Text>
            </View>
            <View style={{ marginRight: 8 }}>
                <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                    <EvilIcons name="pencil" size={24} color="blue" />
                    <Text style={{ color: 'blue', fontWeight: 'bold' }}>Edit</Text>
                </View>

                <TouchableOpacity onPress={()=>{
                    Alert.alert('Are you sure?', 'Do you want to delete the vehicle?', [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed',i),
                          style: 'cancel',
                        },
                        { text: 'OK', onPress: () => console.log('OK Pressed',i) },
                      ]);
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <EvilIcons name="trash" size={24} color="red" />
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>Delete</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    }

    return (
        <View style={{ backgroundColor: 'white', borderTopColor: 'grey', borderTopWidth: 0.5, height: '100%' }}>


            <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate("AddVehicle")} style={{ alignSelf: 'flex-end', marginRight: 16, marginVertical: 20 }}>
                <View style={{ width: (Dimensions.get('window').width / 100) * 35, backgroundColor: 'orange', borderRadius: 4 }}>
                    <View style={{ paddingHorizontal: 16, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', }}>
                        <FontAwesome name="plus" size={22} color="white" />
                        <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft: 8 }}>Add Vehicle</Text>
                    </View>

                </View>
            </TouchableOpacity>
            <ScrollView>
                <View style={{ borderTopWidth: 0.5 }}>

                    {arr.map((item, index) => (
                        bikeCard(index)
                    ))}


                </View>



            </ScrollView>
        </View>
    )
}

export default Vehicles
