import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

import styles from '../assets/Styles/Styles.js';

export default function SignOut({ navigation, route }) {

  useEffect(()=> {
    global.cUser = null;
    global.clientLat = null;
    global.clientLong = null;
    global.clientID = null;
    global.clientEmail = null;

    global.sUser = null;
    global.providerID = null;
    global.providerEmail = null;

    navigation.navigate('BusinessBook');

  }, []);

  useLayoutEffect(()=>{
    navigation.setOptions({
        title:'SignOut',
        headerStyle:{backgroundColor:'#2C6BED'},
        headerTitleStyle:{ color:'white', marginLeft: -30 },
        headerTintColor:'white',

        headerLeft:()=>(
        <View style={{marginLeft:5}}>
        </View>
            ),
        });
},[navigation]);

  return (
    <SafeAreaView>
          <ScrollView style={styles.cart_container}>

            <View style={styles.flat_container}>
            <Card containerStyle={styles.card_container}>
                <View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 10 }}>SignOut</Text>
                  </View>
                </View>
            </Card>
            </View>

          </ScrollView>
      </SafeAreaView>
  );
};
