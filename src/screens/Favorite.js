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
  SafeAreaView
} from 'react-native';

import NewFriend from '../components/Friend';
import AddFriend from '../components/AddFriend';
import { ScrollView } from 'react-native-gesture-handler';

const FriendView = props => {
    let items = []
    let friends = ["Jerry", "Vincent", "Muyang Yan", "Murtuza", "Henry", "Alvin"]

    for (let friend of friends) {
        // items is a list of objects with the friends names
        items.push(
            <NewFriend name={friend}/>
        )
    }
    
  return (
// take in the list of friends and run a loop to display all of them in their own boxes?

    <>
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>{items}<View style={{height: DEVICE_HEIGHT / 7}}></View></ScrollView>
        <AddFriend />
    </View>
    </>
    

  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    zIndex: 5,
    paddingTop: 20,
    display: "flex",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    alignItems: "center",
    textAlign: "center",
    //paddingBottom: 0.2 * DEVICE_HEIGHT
  },
  scrollView: {
    zIndex: 5,
    height: DEVICE_HEIGHT,
  },
  addfriend: {
    padding: 10,
    backgroundColor: "#66CB6A", // 102 203 106
    width: DEVICE_WIDTH * 0.2,
    height: DEVICE_HEIGHT * 0.1,
    color: "000000",
    x: DEVICE_WIDTH * .5,
    y: DEVICE_HEIGHT * .1,

  }, 
  user: {
        display: "flex",
        flexDirection: "row",
        padding: 16,
        backgroundColor: "#666",
        width: DEVICE_WIDTH * 0.7,
        alignItems: "center",
        borderRadius: 15,
        color: "#EEE"
      },
  textInput: {
    width: DEVICE_WIDTH * 0.7,
    padding: 16,
    backgroundColor: "#666",
    borderRadius: 15,
  }
});

export default FriendView;