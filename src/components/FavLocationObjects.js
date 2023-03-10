import React, { useState } from 'react';
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

const NewLocation = props => {
    const [starChecked, setStarChecked] = useState(false);
    
    return (
        <>
            <View style={{...styles.background, backgroundColor: "#666",  marginBottom: 16}}>
            <View style={{...styles.user}}>
                <Text style={{fontSize: 25, color: "#EEE"}}>{props.name}</Text>
            </View>
            <View style={{...styles.filledstar}}>   
            <TouchableOpacity>

                        <Image
                        defaultSource={require("../../assets/emptyStar.png")}
                        source={starChecked ? require("../../assets/filledStar.png") : require("../../assets/emptyStar.png")}
                        style={{width: 40, height: 40, marginLeft: DEVICE_WIDTH * 0.2 }}
                        />
                        </TouchableOpacity>
            </View>
            
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
export default NewLocation