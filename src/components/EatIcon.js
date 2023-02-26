import { useState } from 'react';
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

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const EatIcon = props => {
        
  return (
    <View style={styles.eat}> 
      <TouchableOpacity onPress={() => (navigationRef.current?.navigate("eat"))}>
        <Image style={{width: DEVICE_WIDTH / 4, height: DEVICE_WIDTH / 4}} defaultSource={require("../../assets/eat.png")} />
      </TouchableOpacity>
    </View>
  )
}
// flex direction col then flex direction row to move it up and down

const styles = StyleSheet.create({
  eat: {
    display: "flex",
    zIndex: 110,
    justifyContent: "center",
    alignSelf: 'center',
    bottom: DEVICE_WIDTH / 10,
    backgroundColor: 'transparent',
    position: 'absolute',
    padding: 0,
  },
})
export default EatIcon