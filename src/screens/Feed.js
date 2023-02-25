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
import { navigationRef } from '../lib/navigation'

const Home = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {console.log("jerry")}} style={{...styles.user, marginTop: 20, backgroundColor: "#2BD55B", marginBottom: 16}}>
        <Text style={{fontSize: 18, color: "#EEE"}}>Jerry</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => (navigationRef.current?.navigate("eat"))}>
            <Image
              source={require("../../assets/eat.png")}
              style={{width: 24, height: 24, marginRight: 24 }}
            />
          </TouchableOpacity>
    </View>
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
  container: {
    display: "flex",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});

export default Home;
