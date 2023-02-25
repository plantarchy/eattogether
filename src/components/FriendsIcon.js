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
const FriendsIcon = props => {
        
    return (
      <View style={{...styles.friendsIcon}}> 
        <TouchableOpacity onPress={() => (navigationRef.current?.navigate("eat"))}>
        <Image
          source={require("../../assets/friends.png")}
          style={{...styles.eat, width: 100, height: 100}}  />
        </TouchableOpacity>
      </View>
    )
}
// flex direction col then flex direction row to move it up and down

const styles = StyleSheet.create({
    friendsIcon: {
        display: "flex",
        zIndex: 99,
        justifyContent: "center",
        alignSelf: 'flex-start',
        bottom: DEVICE_HEIGHT/50,
        backgroundColor: 'transparent',
        position: 'absolute',
        color: 'white',
        paddingLeft: (DEVICE_WIDTH/2) - 170,
        padding: 0,
        
      },
    

})
export default FriendsIcon