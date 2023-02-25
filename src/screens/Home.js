import React, { useState, useEffect, useContext } from 'react';
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
import { GlobalContext } from '../modules/GlobalContext';

const Home = props => {
  const { user, setUser } = useContext(GlobalContext);
  // console.log("PROVIDER", useContext(GlobalContext));
  return (
    <View style={styles.container}>
      <Text>{ JSON.stringify(user) }</Text>
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
    textAlign: "center"
  }
});

export default Home;
