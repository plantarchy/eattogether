import AsyncStorage from '@react-native-async-storage/async-storage';
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
import { getUserData } from '../database/user'
import { getAuth } from 'firebase/auth';
import { GlobalContext }  from '../modules/GlobalContext';
import { navigationRef } from '../lib/navigation';

async function runAuth() {
  const uid = getAuth().currentUser?.uid;
  if (uid == null) {
    return null;
  } else {
    return await getUserData(uid);
  }
  // if (user == null || authToken == null) return null;
  // try {
  //   return await reauthenticateWithCredential(user, authToken);
  // } catch (e) {
  //   return null;
  // }
}

// comment
const Login = props => {
  const { user, setUser } = useContext(GlobalContext);
  useEffect(() => {
    (async () => {
      const user = await runAuth();
      console.log(user)
      if (user == null) {
        return;
      } else {
        setUser(user);
        navigationRef.current?.navigate("main")
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, marginBottom: 32 }}>EatWithMe</Text>
      <TouchableOpacity onPress={() => {props.navigation.navigate("signup")}} style={{...styles.button, backgroundColor: "#2BD55B", marginBottom: 16}}>
        <Text style={{fontSize: 18, color: "#EEE"}}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {props.navigation.navigate("login")}} style={styles.button}>
        <Text style={{fontSize: 18, color: "#EEE"}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    //paddingBottom: 0.2 * DEVICE_HEIGHT
  },
  button: {
    padding: 16,
    backgroundColor: "#666",
    width: DEVICE_WIDTH * 0.7,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 15,
    color: "#EEE"
  },
  textInput: {
    width: DEVICE_WIDTH * 0.7,
    padding: 16,
    backgroundColor: "#666",
    borderRadius: 15,
  }
});

export default Login;
