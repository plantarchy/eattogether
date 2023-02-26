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
const AddFriend = props => {
        
    return (
        <View style={{...styles.addButton}}> 
            <TouchableOpacity onPress={() => {console.log("add friend")}} style={{marginLeft: "auto"}}>
                <Image
                defaultSource={require("../../assets/addFriend.png")}
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
        bottom: 90,
        backgroundColor: 'transparent',
        position: 'absolute',
        paddingRight: 50
    }

})
export default AddFriend