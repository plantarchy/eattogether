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

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const AddPreset = props => {
        
    return (
        <View style={{...styles.addButton}}> 
            <TouchableOpacity onPress={() => {console.log("add preset")}} style={{marginLeft: "auto"}}>
                <Image
                source={require("../../assets/addFriend.png")} // same icon as add friend
                style={{...styles.addButton, width: 100, height: 100 }}
                />
            </TouchableOpacity>
        </View>
      )
}
// flex direction col then flex direction row to move it up and down

const styles = StyleSheet.create({
    addButton: {
        display: "flex",
        zIndex: 99,
        justifyContent: "flex-end",
        alignSelf: 'flex-end',
        bottom: 48,
        backgroundColor: 'transparent',
        position: 'fixed',
        paddingRight: 15
    }

})
export default AddPreset