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

const NewPreset = props => {
    
    return (
        
        <>
        <View style={{...styles.background, backgroundColor: "#666",  marginBottom: 16}}>
            <View style={{...styles.user}}>
                <Text style={{fontSize: 25, color: "#EEE"}}>{props.title}</Text>
                <Text style={{fontSize: 12, color: "#EEE", paddingLeft: 5}}>{props.location}</Text>   
            </View>
            
            <TouchableOpacity onPress={() => {console.log("remove-friend")}} style={{marginLeft: "auto"}}>
                        <Image
                        defaultSource={require("../../assets/remove-location.png")}
                        style={{width: 40, height: 40, marginLeft: "auto" }}
                        />
            </TouchableOpacity>
        </View>
        </>
        
    
      )
}
// flex direction col then flex direction row to move it up and down

const styles = StyleSheet.create({
    background: {
        display: "flex",
        flexDirection: "row",
        padding: 16,
        backgroundColor: "#666",
        width: DEVICE_WIDTH * 0.9,
        //justifyContent: "center",
        borderRadius: 15,
        color: "#EEE"
    },
    user: {
        display: "flex",
        flexDirection: "column",
        alignItems: "right",
        justifyContent: "center",
      },
    filledstar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "auto",
    },
})
export default NewPreset