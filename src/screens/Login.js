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
  SafeAreaView
} from 'react-native';
import { EmailAuthProvider } from 'firebase/auth';
import { loginUserEmailPassword } from '../database/auth';
import { GlobalContext } from '../modules/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationRef } from '../lib/navigation';

const Login = props => {
  const { user, setUser } = useContext(GlobalContext);
  const [validation, setValidation] = useState(["", ""]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let validErrors = ["", "", "", ""];
    let errors = false;
    if (!reg.test(email)) {
      validErrors[0] = "Invalid email"
      errors = true;
    }
    setValidation(validErrors);

    try {
      const user = await loginUserEmailPassword(email, password);
      setUser(user);
      console.log("NEW USER", user);
      await AsyncStorage.setItem("user", JSON.stringify(user));
      navigationRef.current?.navigate("main");
    } catch (e) {
      Alert.alert('Login Error', e.message);
    }
    // await AsyncStorage.setItem("credential", EmailAuthProvider.credential(email, password));
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
      <Text style={{ fontSize: 24, marginLeft: "auto", marginRight: "auto", }}>Login</Text>
      <View style={{width: 24, marginRight: 24 }} />
    </View>
    <View style={styles.container}>
      <Text style={{ fontSize: 48, marginBottom: 24 }}>Login</Text>
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
      <TextInput
        style={{ ...styles.textInput, marginBottom: 16 }}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={() => (login())} style={styles.button}>
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

export default Login;
