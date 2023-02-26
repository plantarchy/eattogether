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
        <View style={{...styles.eat}}> 
            <TouchableOpacity onPress={() => (navigationRef.current?.navigate("eat"))}>
      <Image
        defaultSource={require("../../assets/eat.png")}
        style={{...styles.eat, width: 100, height: 100}}  />
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
        bottom: DEVICE_HEIGHT / 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        color: 'white',
        padding: 0,
        
      },
    

})
export default EatIcon