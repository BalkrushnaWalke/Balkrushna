import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, BackHandler, KeyboardAvoidingView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Input, Text, ThemeContext, Image, Avatar } from 'react-native-elements';

import styles from '../assets/Styles/Styles.js';

export default function Options({ navigation }) {

  useEffect(() => {
    if (global.cUser != null) {
      navigation.navigate('ClientDrawer');
    } else if (global.sUser != null) {
      navigation.navigate('ProviderDrawer');
    }
  }, []);

  return (
    <View behavior='padding' style={styles.container}>
            <StatusBar Style='light'/>
            <View style={styles.center}>
              <View style={styles.center}>
                <TouchableOpacity onPress={() => {navigation.navigate('Client Login')}} activeOpacity={0.5} style={styles.center}>
                <Image source={{
                    uri:'https://freepngimg.com/thumb/customer/1-2-customer-transparent-thumb.png'
                }}
                style={styles.icon}
                />
              <Text style={styles.text}>
                    Client Login.
                    </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.center}>
                <TouchableOpacity  onPress={() => {navigation.navigate('Provider Login')}} activeOpacity={0.5} style={styles.center}>
                <Image source={{
                    uri:'https://static.thenounproject.com/png/749127-200.png'
                }}
                style={styles.icon}
                />
                <Text style={styles.text}>
                    Provider login.
                    </Text>

                </TouchableOpacity>
              </View>
            </View>

        </View>
  );
}
