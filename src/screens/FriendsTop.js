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

const Login = props => {
  return (
    // take in the list of friends and run a loop to display all of them in their own boxes?
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {console.log("jerry")}} style={{...styles.user, marginTop: 20, backgroundColor: "#2BD55B", marginBottom: 16}}>
        <Text style={{fontSize: 18, color: "#EEE"}}>Jerry</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {console.log("john")}} style={{...styles.user, backgroundColor: "#2BD55B", marginBottom: 16}}>
        <Text style={{fontSize: 18, color: "#EEE"}}>John</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {console.log("george")}} style={{...styles.user, backgroundColor: "#2BD55B", marginBottom: 16}}>
        <Text style={{fontSize: 18, color: "#EEE"}}>George</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,

    alignItems: "center",
    textAlign: "center",
    paddingBottom: 0.2 * DEVICE_HEIGHT
  },
  addfriend: {
    padding: 10,
    backgroundColor: "#66CB6A", // 102 203 106
    width: DEVICE_WIDTH * 0.2,
    height: DEVICE_HEIGHT * 0.1,
    color: "000000",
    marginBottom: 20,
    x: DEVICE_WIDTH * .5,
    y: DEVICE_HEIGHT * .1,

  }, 
  user: {
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

export default Login;
