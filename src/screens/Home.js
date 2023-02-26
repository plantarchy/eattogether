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
  Button
} from 'react-native';
import { GlobalContext } from '../modules/GlobalContext';
import { getUserFriends, addFriend, removeFriend } from '../database/user'
import { getLocations } from '../database/locations'
import { LOCATIONS, locationFromID } from '../lib/globals'

const Home = props => {
  const { user, setUser } = useContext(GlobalContext);
  // console.log("PROVIDER", useContext(GlobalContext));
  const [ locations, setLocations ] = useState([]);
  const [ friends, setFriends ] = useState([]);
  useEffect(() => {
    (async () => {
      const locationsNew = await getLocations(locationFromID(user.location).value);
      setLocations(locationsNew);
      getUserFriends(user.id);
    })()
  }, [])

  const updateFriends = async () => {
    const friendsNew = await getUserFriends(user.id);
    setFriends(friendsNew);
  }

  const addFriendE = async () => {
    await addFriend({"name": "wang5528", ...user}, { "name": "wang5529", "id": "9PUDol6AayRZvsx7RkmT57WvGR92" })
  }

  const delFriendE = async () => {
    await removeFriend(user.id, "9PUDol6AayRZvsx7RkmT57WvGR92")
  }

  return (
    <View key={'har'} style={styles.container}>
      <Text>{ JSON.stringify(user) }</Text>
      <Text>{ JSON.stringify(locations) }</Text>
      <Text>Friends: { JSON.stringify(friends) }</Text>
      <Button title="Check friends" onPress={updateFriends}/>
      <Button title="Add friend" onPress={addFriendE}/>
      <Button title="Remove Friend" onPress={delFriendE}/>
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
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});

export default Home;
