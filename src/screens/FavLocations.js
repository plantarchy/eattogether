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
import NewLocation from '../components/FavLocationObjects';
import { ScrollView } from 'react-native-gesture-handler';

const LocationView = props => {
  let itemsFav = []
  let itemsReg = []

  let locations = ["Windsor", "PMU", "Ford", "Cary Knight Spot"]
  let favs = ["Hillenbrand", "Earhart", "Red Wok"]
  // GIVEN VIA VINCENTS DB

  for (let location of locations) {
    // items is a list of objects with the friends names
    itemsReg.push(
      <NewLocation key={`${location}`} name={location} favor={false} />
    )
  }
  //<View style={{borderBottomColor: "#CCCCCC", borderBottomWidth: 1}}></View>

  for (let fav of favs) {
    // items is a list of objects with the friends names
    itemsFav.push(
      <NewLocation key={`${fav}`} name={fav} favor={true} />
    )
  }



  return (
    // take in the list of friends and run a loop to display all of them in their own boxes?
    <>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={require("../../assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 24 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, marginLeft: "auto", marginRight: "auto", }}>Locations</Text>
        <View style={{ width: 24, marginRight: 24 }} />
      </View>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>{itemsReg}<View style={{ borderBottomColor: "#CCCCCC", borderBottomWidth: 3, marginBottom: 12 }}></View>{itemsFav}<View style={{ height: DEVICE_HEIGHT / 4 }}></View></ScrollView>
        <NewLocation />
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
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 12,
  },
  scrollView: {
    zIndex: 5,
    height: DEVICE_HEIGHT,
  },
  restaurant: {
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

export default LocationView;
