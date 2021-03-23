import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home';
import Genqrcode from './Genqrcode';
import Fisrt from './First';
const Stack = createStackNavigator();

function Routes(){

return (

    <NavigationContainer>
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle:{
                    backgroundColor:'#FFF'              }
            }}
        >
        <Stack.Screen  name="Fisrt" component={Fisrt}></Stack.Screen>
        <Stack.Screen  name="Home" component={Home}></Stack.Screen>
        <Stack.Screen  name="Qrcode" component={Genqrcode}></Stack.Screen>

        </Stack.Navigator>

    </NavigationContainer>
);



}

export default Routes;