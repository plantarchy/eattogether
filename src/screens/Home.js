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
      <Text> key={'har'}your mom gay </Text>
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
