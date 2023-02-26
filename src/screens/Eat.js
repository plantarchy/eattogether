import React, { useState, useEffect } from 'react';
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
import { ScrollView } from 'react-native-gesture-handler';

const Eat = props => {
  return (
  <>
   <SafeAreaView style={{...styles.container}} >
      < Text style={{...styles.location, fontSize: 25, fontWeight: 'bold', color: "black"}}>Location</Text>
      <TouchableOpacity onPress={() => {console.log("default")}} style = {{...styles.default, marginTop: 10, backgroundColor: "#F23F8A"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>ANY-DEFAULT</Text>
     </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log("Select...")}} style = {{...styles.grey_box, marginTop: 10, backgroundColor: "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>Select...</Text>
    </TouchableOpacity>
      < Text style={{...styles.people, fontSize: 25, fontWeight: 'bold', color: "black"}}>People</Text>
      <TouchableOpacity onPress={() => {console.log("default")}} style = {{...styles.default, marginTop: 10, backgroundColor: "#F23F8A"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>FRIENDS-DEFAULT</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log("Public")}} style = {{...styles.grey_box, marginTop: 10, backgroundColor: "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>PUBLIC</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log("Select...")}} style = {{...styles.grey_box, marginTop: 10, backgroundColor: "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>SELECT...</Text>
    </TouchableOpacity>
    < Text style={{...styles.time, fontSize: 25, fontWeight: 'bold', color: "black"}}>Time</Text>
    <TouchableOpacity onPress={() => {console.log("Now-default")}} style = {{...styles.default, marginTop: 10, backgroundColor: "#F23F8A"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>NOW-DEFAULT</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log("5mins")}} style = {{...styles.grey_box, marginTop: 10, backgroundColor: "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>5 MINS</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log("10mins")}} style = {{...styles.grey_box, marginTop: 10, backgroundColor: "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>10 MINS</Text>
    </TouchableOpacity>
    {/* Do not put this one in the scroll */}
    <TouchableOpacity onPress={() => {console.log("Eat")}} style = {{...styles.eat, marginTop: 10, backgroundColor: "#2BD55B"}}>
      < Text style={{fontSize: 55, fontWeight: 'bold', color: "#EEE", alignItems: "center",}}>EAT</Text>
    </TouchableOpacity>
    </SafeAreaView>
    </>
  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  location: {
    display: "flex",
    flexDirection: "row",
    right: "33%",
    textAlign: "left",
  },
  eat: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#666",
    width: DEVICE_WIDTH - 15,
    //height: "10%",
    marginLeft: "auto",
    justifyContent: "center",
    borderRadius: 15,
    bottom: "2%",
    color: "#EEE",
  },
  default: {
    padding: 12,
    width: DEVICE_WIDTH - 15,
    height: "6%",
    alignItems: "center",
    borderRadius: 15,
    color: "#EEE"
  },
  grey_box: {
    padding: 12,
    width: DEVICE_WIDTH - 15,
    height: 45,
    alignItems: "center",
    borderRadius: 15,
    color: "#EEE",
  },
  time: {
    right: "39%",
    display: "flex",
    textAlign: "left",
  },
  people: {
    right: "36%",
    display: "flex",
    textAlign: "left",
  },
  
  container: {
    display: "flex",
    zIndex: 99,
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-end",
    alignSelf: 'flex-end',
    bottom: "5%",
  }
});

export default Eat;
