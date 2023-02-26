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
   <View style={styles.topBar}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image
          source={require("../../assets/left-arrow.png")}
          style={{width: 24, height: 24, marginLeft: 24 }}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 24, marginLeft: "auto", marginRight: "auto", }}>Eat</Text>
      <View style={{width: 24, marginRight: 24 }} />
    </View>
    <ScrollView style = {{...styles.scroll}}>  
    <View>
    < Text style={{...styles.location, fontSize: 25, fontWeight: 'bold', color: "black"}}>Location</Text>    
    </View>
      <TouchableOpacity onPress={() => {console.log("default")}} style = {{...styles.default, marginTop: 10, backgroundColor: "#F23F8A"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>ANY-DEFAULT</Text>
     </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log("Select...")}} style = {{...styles.grey_box, marginTop: 10, backgroundColor: "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>Select...</Text>
    </TouchableOpacity>
      <View>
      < Text style={{...styles.location, fontSize: 25, fontWeight: 'bold', color: "black"}}>People</Text>
      </View>
      <TouchableOpacity onPress={() => {console.log("default")}} style = {{...styles.default, marginTop: 10, backgroundColor: "#F23F8A"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>FRIENDS-DEFAULT</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log("Public")}} style = {{...styles.grey_box, marginTop: 10, backgroundColor: "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>PUBLIC</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log("Select...")}} style = {{...styles.grey_box, marginTop: 10, backgroundColor: "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>SELECT...</Text>
    </TouchableOpacity>
    <View>
    < Text style={{...styles.location, fontSize: 25, fontWeight: 'bold', color: "black"}}>Time</Text>
    </View>
    <TouchableOpacity onPress={() => {console.log("Now-default")}} style = {{...styles.default, marginTop: 10, backgroundColor: "#F23F8A"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>NOW-DEFAULT</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log("5mins")}} style = {{...styles.grey_box, marginTop: 10, backgroundColor: "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>5 MINS</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log("10mins")}} style = {{...styles.grey_box, marginTop: 10, backgroundColor: "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>10 MINS</Text>
    </TouchableOpacity>
    </ScrollView>
    {/* Do not put this one in the scroll */}
    <TouchableOpacity onPress={() => {console.log("Eat")}} style = {{...styles.eat, marginTop: 10, backgroundColor: "#2BD55B"}}>
      < Text style={{fontSize: 55, fontWeight: 'bold', color: "#EEE", textAlign: "center",}}>EAT</Text>
    </TouchableOpacity>
    </SafeAreaView>
    </>
  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  location: {
    display: "fixed",
    flexDirection: "row",
    textAlign: "center",
  },
  scroll: {
    top: DEVICE_HEIGHT * 0.15,
  },
  eat: {
    display: "flex",
    padding: 10,
    backgroundColor: "#666",
    width: DEVICE_WIDTH - 15,
    justifyContent: "center",
    borderRadius: 15,
    color: "#EEE",
  },
  default: {
    padding: 12,
    width: DEVICE_WIDTH - 15,
    alignItems: "center",
    borderRadius: 15,
    color: "#EEE"
  },
  grey_box: {
    padding: 12,
    width: DEVICE_WIDTH - 15,
    height: 50,
    alignItems: "center",
    borderRadius: 15,
    color: "#EEE",
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
    bottom: DEVICE_HEIGHT - (DEVICE_HEIGHT * 0.88),
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    top: DEVICE_HEIGHT * 0.13,
    paddingBottom: 8,
    //paddingTop: 12,
  }
});

export default Eat;
