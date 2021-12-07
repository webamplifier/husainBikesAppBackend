import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Signup from './screens/Signup';
import Login from './screens/Login'
import ForgotPasswordEmail from './screens/ForgotPassword';
import Home from './screens/Home'
import Profile from './screens/Profile';
import ProfileInformation from './screens/ProfileInformation';
import Vehicles from './screens/Vehicles';
import AddVehicle from './screens/AddVehicle';

import {init} from './db'



export default function App() {
  const Stack = createStackNavigator();
  React.useEffect(()=>{
    init().then(()=>console.log('success')).catch(err=>console.log(err))
  },[])
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{
            headerShown : false
          }} />
          <Stack.Screen name="Signup" component={Signup} options={{
            headerShown : false
          }} />
          <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} options={{
            headerShown : false
          }} />
          <Stack.Screen name="Home" component={Home} options={{
            headerShown : false
          }} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ProfileInformation" component={ProfileInformation} />
          <Stack.Screen name="Vehicles" component={Vehicles} />
          <Stack.Screen name="AddVehicle" component={AddVehicle} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
