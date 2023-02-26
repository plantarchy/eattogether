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
import FeedItem from '../components/FeedItem';

const Feed = props => {
  let items = [];
  let people = [["John Doe(You)", "3:30","Wiley"], ["Vincent","4:30", "Hillenbrand"], ["Connor","1:20", "Any"]];

  items.push(
    <FeedItem key={0} person={people[0]} bgColor={'#F23F8A'}/>
  )

  for (let i = 1; i < people.length; i++) {
    items.push(
      <FeedItem key={i} person={people[i]} bgColor={'#2BD55B'}/>
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
  feedItem: {
    display: "flex",
    flexDirection: "column",
    padding: 30,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#2BD55B"
  },
  text: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 20
  },
});

export default Feed;
