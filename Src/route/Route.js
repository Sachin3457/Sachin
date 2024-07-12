import React from "react";

import {createStackNavigator}from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Splashscreen from '../Screen/Splashscreen';

const Stack = createStackNavigator()


const Route=()=>{

return(
  
    <NavigationContainer>
        <Stack.Navigator>

         <Stack.Screen
            name="Splashscreen"
            component={Splashscreen}
            options={{headerShown:false}}
            /> 

            </Stack.Navigator>
            </NavigationContainer>
)
}
export default Route;