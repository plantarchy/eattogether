import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { navigationRef } from '../lib/navigation'

import EatIcon from '../components/EatIcon';
import FriendsIcon from '../components/FriendsIcon';
import LocationsIcon from '../components/LocationsIcon';

const Home = props => {
  let items = [];
  let names = ["Vincent", "Connor", "Murtuza", "Alvin", "Henry"];

  items.push(
    <View style={styles.myFeedItem}>
      <Text>You</Text>
    </View>
  )

  for (let name of names) {
    items.push(
      <View style={styles.feedItem}>
        <Text>{`${name}`}</Text>

      </View>
    )
  };

  return (
  <>
    <View style={styles.container}>
      <ScrollView style={{width: DEVICE_WIDTH}}>{items}<View style={{height: DEVICE_HEIGHT / 4}}></View></ScrollView>
      
    </View>
    <View style={styles.southPanel}></View>
    <EatIcon/>
    <FriendsIcon/>
    <LocationsIcon/>
  </>
  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  
  user: {
    padding: 16,
    backgroundColor: "#666",
    width: DEVICE_WIDTH * 0.7,
    alignItems: "center",
    borderRadius: 15,
    color: "#EEE"
  },
  southPanel: {
    display: "flex",
    width: DEVICE_WIDTH,
    height: 100,
    backgroundColor: "blue",
    justifyContent: "flex-end",
  },
  container: {
    display: "flex",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center"
  },
  myFeedItem: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    color: "#EEE",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 50,
    backgroundColor: "red"
  },
  feedItem: {
    display: "flex",
    flexDirection: "row",
    padding: 50,
    borderRadius: 15,
    color: "#EEE",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "green"
  }


});

export default Home;
