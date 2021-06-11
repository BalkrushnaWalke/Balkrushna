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
  SafeAreaView,
  BackHandler,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { Card, ListItem, Button, Avatar, SearchBar, Icon } from 'react-native-elements'
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios'
import ReactHlsPlayer from 'react-hls-player';

import styles from '../assets/Styles/Styles.js';

const BannerWidth = Dimensions.get('window').width;
const token = 'YWRtaW5hZG1pbjEyMw==';

export default function Overview({ navigation, route }) {
  const isFocused = useIsFocused();
  const [load, setLoad] = useState('');
  const [movies, setMovies] = useState([]);

  setTimeout(() => {
    setLoad(false);
  }, 5000);

  const favo = () => {
    Alert.alert('Movie added to favorites!');
    console.log('favo')
  }

  return (
    <SafeAreaView>
      <View style={{ marginBottom: 20 }}>
      <TouchableOpacity>
        <Card containerStyle={styles.card_container}>
          <ImageBackground source={{ uri: route.params.BackDrop }} style={styles.cd_img} blurRadius={5}>
            <Card.Image style={styles.card_img} source={{ uri: route.params.Poster }} />
          </ImageBackground>
        </Card>
      </TouchableOpacity>
      <View style={styles.mv_title_view}>
      </View>
    </View>

    <View style={styles.split}>
      <Text style={styles.over}>{route.params.OverView}</Text>
    </View>

    <View style={styles.favo}>
      <Button
        raised
        buttonStyle={styles.favo_btn}
        icon={
          <Icon
            name="favorite-border"
            size={15}
            color="white"
          />
        }
        title=" Favorite"
        onPress={favo}
      />
    </View>

    <View style={styles.split} >
      <View style={{ flex: 1, padding: 5 }} >
        <ReactHlsPlayer
          src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        />
      </View>
      <View style={{ flex: 1 }} >
        <Text style={styles.split}><Text style={{fontWeight: 'bold'}}>Title: </Text><Text>{route.params.Title}</Text></Text>
        <Text style={styles.split}><Text style={{fontWeight: 'bold'}}>Release Date: </Text><Text>{route.params.Release}</Text></Text>
        <Text style={styles.split}><Text style={{fontWeight: 'bold'}}>Popularity: </Text><Text>{route.params.Popularity}</Text></Text>
        <Text style={styles.split}><Text style={{fontWeight: 'bold'}}>Reviews: </Text><Text>{route.params.VoteCnt}</Text></Text>
        <Text style={styles.split}><Text style={{fontWeight: 'bold'}}>Ratings: </Text><Text>{route.params.VoteAvg}</Text></Text>
      </View>
    </View>
      </SafeAreaView>
  );
};
