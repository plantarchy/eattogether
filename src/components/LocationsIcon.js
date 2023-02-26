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
const LocationsIcon = props => {
        
  return (
    <View style={styles.locationsIcon}> 
      <TouchableOpacity onPress={() => (navigationRef.current?.navigate("location"))}>
      <Image style={{width: DEVICE_WIDTH / 6, height: DEVICE_WIDTH / 6}} defaultSource={require("../../assets/location.png")} />
      </TouchableOpacity>
    </View>
  )
}
// flex direction col then flex direction row to move it up and down

const styles = StyleSheet.create({
  locationsIcon: {
    display: "flex",
    zIndex: 110,
    justifyContent: "center",
    alignSelf: 'center',
    bottom: DEVICE_WIDTH / 20,
    backgroundColor: 'transparent',
    position: 'absolute',
    paddingRight: DEVICE_WIDTH / 2,
    padding: 0,
  },
    

})
export default LocationsIcon