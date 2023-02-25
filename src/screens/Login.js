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
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>QuickEats</Text>
      <TextInput
        style={{ ...styles.textInput, marginBottom: 16 }}
        placeholder="Username"
      />
      <TextInput
        style={{ ...styles.textInput, marginBottom: 16 }}
        placeholder="Password"
      />
      <TouchableOpacity onPress={() => {console.log("login")}} style={styles.button}>
        <Text style={{fontSize: 18}}>Login</Text>
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
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingBottom: 0.2 * DEVICE_HEIGHT
  },
  button: {
    padding: 16,
    backgroundColor: "#D9D9D9",
    width: DEVICE_WIDTH * 0.7,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 15,
  },
  textInput: {
    width: DEVICE_WIDTH * 0.7,
    padding: 16,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
  }
});

export default Login;
