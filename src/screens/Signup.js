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
  SafeAreaView,
  ActionSheetIOS,
  Modal
} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
import ModalSelector from 'react-native-modal-selector';

const Signup = props => {
  const [location, setLocation] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState();
  const locations = [
    {label: 'UIUC', key: 0, value: "uiuc"},
    {label: 'Purdue', key: 1, value: "purdue"},
    {label: 'IU-Bloomington', key: 2, value: "iu-bloom"},
    {label: 'UIC', key: 3, value: "uic"},
    {label: 'WashU', key: 4, value: "washu"},
  ];

  return (
    <>
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image
          source={require("../../assets/left-arrow.png")}
          style={{width: 24, height: 24, marginLeft: 24 }}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 24, marginLeft: "auto", marginRight: "auto", }}>Signup</Text>
      <View style={{width: 24, marginRight: 24 }} />
    </View>
    <View style={styles.container}>
      <Text style={{ fontSize: 48, marginBottom: 24 }}>Signup</Text>
      <TextInput
        style={{ ...styles.textInput, marginBottom: 16 }}
        placeholder="Email"
      />
      <TextInput
        style={{ ...styles.textInput, marginBottom: 16 }}
        placeholder="Password"
      />
      <TextInput
        style={{ ...styles.textInput, marginBottom: 16 }}
        placeholder="Confirm Password"
      />
      <Text style={{ fontSize: 16, textAlign: "left", alignSelf: "start", marginLeft: 0.15 * DEVICE_WIDTH, marginBottom: 8 }}>Location:</Text>
      <ModalSelector
        data={locations}
        initValue="Select Location..."
        style={{ width: 0.7 * DEVICE_WIDTH, color: "white", marginBottom: 16 }}
        onChange={(option)=>{ setLocation(option.key) }} >
        <TextInput
          style={{backgroundColor:'#D9D9D9', borderRadius: 15, padding:16, color: "black" }}
          editable={false}
          value={locations[location].label} />
      </ModalSelector>
      <TouchableOpacity onPress={() => {console.log("login")}} style={styles.button}>
        <Text style={{fontSize: 18}}>Login</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingBottom: 0.2 * DEVICE_HEIGHT
  },
  button: {
    padding: 16,
    backgroundColor: "#D9D9D9",
    width: DEVICE_WIDTH * 0.7,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 15,
  },
  textInput: {
    width: DEVICE_WIDTH * 0.7,
    padding: 16,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 12,
  }
});

export default Signup;
