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
    <ScrollView>{items}</ScrollView>
    <View style={styles.southPanel}>
      <Text>FDOIJSH</Text>
    </View>
    </>
  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  southPanel: {
    display: "flex",
    width: DEVICE_WIDTH,
    height: 50,
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
    padding: 50,
    width: DEVICE_WIDTH,
    backgroundColor: "red"
  },
  feedItem: {
    padding: 50,
    width: DEVICE_WIDTH,
    backgroundColor: "green"
  }
  

});

export default Home;
