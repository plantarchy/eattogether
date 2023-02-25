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

const Home = props => {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => {console.log("Eat")}} style = {{...styles.user, marginTop: 10, backgroundColor: "#2BD55B", marginLeft: "center"}}>
      < Text style={{fontSize: 55, fontWeight: 'bold', color: "#EEE"}}>EAT</Text>
    </TouchableOpacity>
    </View>
  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  user: {
    padding: 10,
    backgroundColor: "#666",
    width: DEVICE_WIDTH - 15,
    height: "10%",
    alignItems: "center",
    borderRadius: 15,
    color: "#EEE"
  },
  container: {
    display: "flex",
    zIndex: 99,
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-end",
    alignSelf: 'flex-end',
    bottom: "14%",
  }
});

export default Home;
