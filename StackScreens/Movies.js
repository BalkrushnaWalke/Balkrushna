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
  ActivityIndicator
} from 'react-native';
import { Card, ListItem, Button, Avatar, SearchBar } from 'react-native-elements'
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios'
import Carousel from 'react-native-banner-carousel';

import styles from '../assets/Styles/Styles.js';

const BannerWidth = Dimensions.get('window').width;
const token = 'YWRtaW5hZG1pbjEyMw==';

export default function Movies({ navigation, route }) {
   const isFocused = useIsFocused();
  const [load, setLoad] = useState('');
  const [movies, setMovies] = useState([]);

  setTimeout(() => {
    setLoad(false);
  }, 5000);

  useEffect(() => {
    setLoad(true);
    const unsub = navigation.addListener('focus', () => {
      getData();
    });
    return unsub;
  }, []);

const getData = () =>{
  axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US',
  ).then((response)=> {
    console.log(response.data.results);
    setMovies(response.data.results);
  }).catch();
}


  const renderAd = (adBanner, index) => {
    const backdropPath = 'https://image.tmdb.org/t/p/original' + adBanner.backdrop_path;
    return (
      <View key={index} style={styles.carousel}>
          <Image style={styles.ad_image} source={{ uri: backdropPath }} />
      </View>
    );
  }

  const renderType = ({ item }) => {
    const posterPath = 'https://image.tmdb.org/t/p/original' + item.poster_path;
    const backdropPath = 'https://image.tmdb.org/t/p/original' + item.backdrop_path;
    return (
    <View style={{ marginBottom: 20 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Overview', {
      Poster: posterPath,
      BackDrop: backdropPath,
      OverView: item.overview,
      Title: item.original_title,
      Popularity: item.popularity,
      Release: item.release_date,
      VoteAvg: item.vote_average,
      VoteCnt: item.vote_count,
    }) }>
        <Card containerStyle={ styles.type_container }>
          <Card.Image style={styles.mv_img} source={{ uri: posterPath }} />
        </Card>
      </TouchableOpacity>
      <View style={styles.mv_title_view}>
        <Text style={styles.mv_title}>{item.title}</Text>
      </View>
    </View>
  );
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.home_container}>
              <View>

              <View>
                <Carousel
                    autoplay
                    autoplayTimeout={2000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                    useNativeDriver={true}
                >
                    {movies.map((adBanner, index) => renderAd(adBanner, index))}
                </Carousel>
              </View>

                <View style={styles.typeFlat_container}>
                  <FlatList
                    horizontal
                    data={movies}
                    keyExtractor={({ id }, index) => id}
                    renderItem={ renderType }
                  />
                </View>
              </View>

          </ScrollView>
      </SafeAreaView>
  );
};
