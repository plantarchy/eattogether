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

// comment
const Login = props => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, marginBottom: 32 }}>QuickEats</Text>
      <TouchableOpacity onPress={() => {console.log("login")}} style={{...styles.button, backgroundColor: "#2BD55B", marginBottom: 16}}>
        <Text style={{fontSize: 18, color: "#EEE"}}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {console.log("login")}} style={styles.button}>
        <Text style={{fontSize: 18, color: "#EEE"}}>Login</Text>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    //paddingBottom: 0.2 * DEVICE_HEIGHT
  },
  button: {
    padding: 16,
    backgroundColor: "#666",
    width: DEVICE_WIDTH * 0.7,
    alignItems: "center",
    textAlign: "center",
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
