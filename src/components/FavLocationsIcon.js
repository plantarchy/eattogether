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
        <View style={{...styles.locationsIcon}}> 
            <TouchableOpacity onPress={() => (navigationRef.current?.navigate("invitefriends"))}>
      <Image
        defaultSource={require("../../assets/location.png")}
        style={{...styles.locationsIcon, width: 1, height: 90}}  />
    </TouchableOpacity>
        </View>
      )
}
// flex direction col then flex direction row to move it up and down

const styles = StyleSheet.create({
    locationsIcon: {
      display: "flex",
      zIndex: 50,
      justifyContent: "center",
      alignSelf: 'flex-start',
      bottom: DEVICE_HEIGHT/50,
      backgroundColor: 'transparent',
      position: 'absolute',
      color: 'white',
      paddingLeft: (DEVICE_WIDTH/2) + 70,
      padding: 0,
        
      },
    

})
export default LocationsIcon