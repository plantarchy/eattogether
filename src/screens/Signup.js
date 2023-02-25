import AsyncStorage from '@react-native-async-storage/async-storage';
import {EmailAuthProvider} from 'firebase/auth';
import React, { useState, useEffect, useContext } from 'react';
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
import { createUserEmailPassword } from '../database/auth';
import { GlobalContext }  from '../modules/GlobalContext';

const Signup = props => {
  const { onSignup } = props;
  const { user, setUser } = useContext(GlobalContext);

  const locations = [
    {label: 'UIUC', key: 0, value: "uiuc"},
    {label: 'Purdue', key: 1, value: "purdue"},
    {label: 'IU-Bloomington', key: 2, value: "iu-bloom"},
    {label: 'UIC', key: 3, value: "uic"},
    {label: 'WashU', key: 4, value: "washu"},
  ];

  const [validation, setValidation] = useState(["", "", "", ""]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [location, setLocation] = useState(0);

  const signup = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let validErrors = ["", "", "", ""];
    let errors = false;
    if (!reg.test(email)) {
      validErrors[0] = "Invalid email"
      errors = true;
    }
    if (password.length <= 8) {
      validErrors[1] = "Password length must be >8"
      errors = true;
    }
    if (password != cpassword) {
      validErrors[2] = "Passwords must match"
      errors = true;
    }
    setValidation(validErrors);

    try {
      const user = await createUserEmailPassword(email, password, location);
      setUser(user);
      console.log("NEW USER", user);
      navigationRef.current?.navigate("main");
    } catch (e) {
      Alert.alert("Signup Error", e.message);
    }
  }

  return (
    <>
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image
          source={require("../../assets/left-arrow.png")}
          style={{width: 24, height: 24, marginLeft: 24 }}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 24, marginLeft: "auto", marginRight: "auto", }}>
        Signup
      </Text>
      <View style={{width: 24, marginRight: 24 }} />
    </View>
    <View style={styles.container}>
      <Text style={{ fontSize: 48, marginBottom: 24 }}>Signup</Text>
      {
        validation[0] ? <Text style={{ color: "red" }}>
          {validation[0]}
        </Text> : <></>
      }
      <TextInput
        style={{ ...styles.textInput, marginBottom: 16, ...(validation[0] ? { borderColor: "red", borderWidth: 2 } : {}) }}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      {
        validation[1] ? <Text style={{ color: "red" }}>
          {validation[1]}
        </Text> : <></>
      }
      <TextInput
        style={{ ...styles.textInput, marginBottom: 16, ...(validation[1] ? { borderColor: "red", borderWidth: 2 } : {}) }}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      {
        validation[2] ? <Text style={{ color: "red" }}>
          {validation[2]}
        </Text> : <></>
      }
      <TextInput
        style={{ ...styles.textInput, marginBottom: 16, ...(validation[1] ? { borderColor: "red", borderWidth: 2 } : {}) }}
        placeholder="Confirm Password"
        onChangeText={(text) => setCPassword(text)}
        secureTextEntry={true}
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
      <TouchableOpacity onPress={() => {signup()}} style={styles.button}>
        <Text style={{fontSize: 18}}>Sign Up</Text>
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
