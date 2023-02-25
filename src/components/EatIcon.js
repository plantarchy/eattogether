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
        source={require("../../assets/eat.png")}
        style={{...styles.eat, width: 100, height: 100}}  />
    </TouchableOpacity>
        </View>
      )
}
// flex direction col then flex direction row to move it up and down

const styles = StyleSheet.create({
    eat: {
        display: "flex",
        zIndex: 99,
        justifyContent: "center",
        alignSelf: 'center',
        bottom: 90,
        backgroundColor: 'transparent',
        position: 'fixed',
        color: 'white'
        
      },
    

})
export default EatIcon