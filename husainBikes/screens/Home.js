import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import tw from 'tailwind-react-native-classnames'
import { EvilIcons } from '@expo/vector-icons';

const Home = (props) => {
    const [latitude, setLatitude] = React.useState('')
    const [longitude, setLongitude] = React.useState('')
    React.useEffect(async () => {
        Location.requestForegroundPermissionsAsync()
        let location = await Location.getCurrentPositionAsync({}).then(response => {
            setLatitude(response.coords.latitude)
            setLongitude(response.coords.longitude)
        }).catch(err => console.log(err));

    }, [])
    return (
        <View style={{ flex: 1 }}>
            {(latitude > 0 && longitude > 0) && <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
            </MapView>}


            <TouchableOpacity style={{ zIndex: 9999, backgroundColor: 'orange', paddingVertical: 10, borderRadius: 20, elevation: 5, paddingHorizontal: 20, position: 'absolute', bottom: 40, marginLeft: ((Dimensions.get('window').width / 100) * 28) }} onPress={() => console.log("hy")} activeOpacity={0.9}>
                <View>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Mark Service Here</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>props.navigation.navigate("Profile")} style={{ zIndex: 9999, backgroundColor: 'white', paddingVertical: 11, borderRadius: 60, elevation: 5, paddingHorizontal: 8, position: 'absolute', top: 60, right: ((Dimensions.get('window').width / 100) * 8) }}>
                <EvilIcons name="user" size={36} color="black" />
            </TouchableOpacity>

        </View>
    )
}

export default Home
