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

import NewFriend from '../components/FriendObject';
import AddFriend from '../components/AddFriend';
import { ScrollView } from 'react-native-gesture-handler';
import { GlobalContext } from '../modules/GlobalContext';
import { getUserFriends } from '../database/user';

const FriendView = props => {
  let items = []
  // let friends = ["Jerry", "Vincent", "Muyang Yan", "Murtuza", "Henry", "Alvin"]
  let { user, setUser } = useContext(GlobalContext);
  let { friends, setFriends } = useContext(GlobalContext);

  console.log("YOUR MOTHER0");
  useEffect(() => {
    console.log("YOUR MOTHER");
    (async () => {
      console.log("YOUR MOTHER2");
      const friendsNew = await getUserFriends(user.id, setFriends);
      console.log("NEWFR", friendsNew);
      setFriends(friendsNew);
    })()
  }, []);

  for (let friend of friends) {
    // items is a list of objects with the friends names
    console.log("NEWFREIND", friend, friend.id)
    items.push(
      <NewFriend friendID={friend.id} key={`${friend.id}`} name={friend.name} />
    )
  }

  return (
    // take in the list of friends and run a loop to display all of them in their own boxes?
      <>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={require("../../assets/left-arrow.png")}
              style={{width: 24, height: 24, marginLeft: 24 }}
            />
          </TouchableOpacity>

          <Text style={{ paddingLeft: 5, fontSize: 24, marginLeft: "auto", marginRight: "auto", }}>Friends</Text>
          <TouchableOpacity onPress={( ) => props.navigation.goBack()}>
            <Image
              source={require("../../assets/find.png")}
              style={{width: 24, height: 24, marginRight: 24 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>{items}<View style={{height: DEVICE_HEIGHT / 4}}></View></ScrollView>
          <AddFriend />
        </View>
      </>


  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    zIndex: 5,
    paddingTop: 20,
    display: "flex",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    alignItems: "center",
    textAlign: "center",
    //paddingBottom: 0.2 * DEVICE_HEIGHT
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 12,
  },
  scrollView: {
    zIndex: 5,
    height: DEVICE_HEIGHT,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#666",
    width: DEVICE_WIDTH * 0.7,
    alignItems: "center",
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

export default FriendView;
