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
                source={require("../../assets/addFriend.png")}
                style={{width: 80, height: 80 }}
                />
            </TouchableOpacity>
        </View>
      )
}
// flex direction col then flex direction row to move it up and down

const styles = StyleSheet.create({
    addButton: {
        display: "flex",
        zIndex: 1,
        justifyContent: "flex-end",
        alignSelf: 'flex-end',
        paddingRight: 10, 
        paddingBottom: 70,
        backgroundColor: 'transparent',
        position: 'fixed'
    }

})
export default AddFriend