import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


import Movies from './StackScreens/Movies.js'
import Overview from './StackScreens/Overview.js'

import { StackActions } from '@react-navigation/native';

const Stack  = createStackNavigator();

const globalScreenOptions={
  headerStyle: { backgroundColor:"#4040a1"},
  headerTitleStyle: {color:"white"},
  headerTintColor:"white",
};

console.disableYellowBox = true;

export default function StackNavigation( { navigation }) {

  return (
      <Stack.Navigator
      //initialRouteName="Movies"

      screenOptions={globalScreenOptions}>

      <Stack.Screen  name='Movies' component={Movies}/>
      <Stack.Screen  name='Overview' component={Overview}/>

      </Stack.Navigator>
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
