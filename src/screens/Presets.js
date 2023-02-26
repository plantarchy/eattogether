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

import NewPreset from '../components/PresetObject';
import AddPreset from '../components/AddPreset';
import { ScrollView } from 'react-native-gesture-handler';

const PresetView = props => {
    let items = []
    var presets = { "Dinner - Mon " : "Hillenbrand 6:30 PM" , 
        "Lunch - Wed " : "Windsor 1:30 PM" ,
        "Brek" : "Ford 8:30 AM" ,  
    };
    //let presets = []
    // WILL BE CHANGED VIA BACKEND

    // if (presets.length == 0) {
      
    //   return (
    //     <View style={styles.container}>
    //   <Text> You have no current presets. Try making one below! </Text>
    // </View>
    //   )
    // }

    for (var key in presets) {
        // items is a list of objects with the friends names
        items.push(
            <NewPreset key={`${key}`} title={key} location={presets[key]}/>
        )
    }
    
  return (
// take in the list of friends and run a loop to display all of them in their own boxes?


    <>
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>{items}<View style={{height: DEVICE_HEIGHT / 7}}></View></ScrollView>
        <AddPreset />
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

export default PresetView;
