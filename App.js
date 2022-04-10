/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




import Consumer, { Context } from './Context';
import Home from './src/screens/Home';
import Calculate from './src/screens/Calculate';


const Stack=createNativeStackNavigator();

const App: () => Node = () => {

  return (
    <Context>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              
              title:"",
              headerStyle:{
                backgroundColor:"#655339"
              },
              headerTitleStyle:{
                textAlign: 'center',
              }
            }} />
            
            <Stack.Screen name="Calculate" component={Calculate}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
