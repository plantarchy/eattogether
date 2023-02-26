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
import { ScrollView } from 'react-native-gesture-handler';
import ModalSelector from 'react-native-modal-selector';
import { getCurrentEats, listEats, addEat, deleteEat } from '../database/eat';
import {getUserFriends} from '../database/user';
import { notifyFriends } from '../database/notifications';
import {navigationRef} from '../lib/navigation';
import { GlobalContext } from '../modules/GlobalContext';
import { addedUsers } from '../components/InviteFriendsObject';

const Eat = props => {
  const [ timeOffset, setTimeOffset ] = useState(0);
  const [ location, setLocation ] = useState(0)
  const { user, setUser } = useContext(GlobalContext);
  const [ feedItems, setFeedItems ] = useState([]);
  const [ useCustomInvites, setUseCustomInvites ] = useState(false);
  const offsets = [
    0,
    5,
    15
  ];
  const locations = [
    {label: 'ANY - Default', key: 0 },
    {label: 'Ikenberry', key: 1 },
    {label: 'Lincoln/Allen', key: 2, },
    {label: 'PAR', key: 3, },
    {label: 'LAR', key: 4, },
  ];



  const submit = async () => {
    let processedLocation = locations[location].label;
    if (location === 0) {
      processedLocation = "ANYWHERE"
    }

    console.log(user);
    const currentEats = await getCurrentEats(user.id, () => {});
    console.log("CRURENT", currentEats);
    for (let eat of currentEats) {
      deleteEat(eat.id)
    }

    if (useCustomInvites) {
      const pfriends = addedUsers;
      await addEat(user.name, {
        ownerID: user.id,
        location: processedLocation,
        offset: offsets[timeOffset],
        people: pfriends
      });
      await notifyFriends(pfriends, {
        name: user.name,
        ownerID: user.id,
        location: processedLocation,
        offset: offsets[timeOffset],
        people: pfriends
      });
    } else {
      const pfriends = (await getUserFriends(user.id)).map((obj) => (obj.id))
      await addEat(user.name, {
        ownerID: user.id,
        location: processedLocation,
        offset: offsets[timeOffset],
        people: pfriends
      });
      await notifyFriends(pfriends, {
        name: user.name,
        ownerID: user.id,
        location: processedLocation,
        offset: offsets[timeOffset],
        people: pfriends
      });
    }
  }

  const openCustomInvites =  async () => {
    navigationRef.current?.navigate("invitefriends", { })
    setUseCustomInvites(true);
  }

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
      <ModalSelector
        data={locations}
        initValue="Select Location..."
        onChange={(option)=>{ setLocation(option.key) }} >
        <TextInput
          style={{ ...styles.default, marginTop: 10, backgroundColor: "#F23F8A", fontSize: 25, fontWeight: "bold", color: "#EEE", textAlign: "center"}}
          editable={false}
          value={locations[location].label} />
      </ModalSelector>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>ANY-DEFAULT</Text>
      <View>
      < Text style={{...styles.location, fontSize: 25, fontWeight: 'bold', color: "black"}}>People</Text>
      </View>
      <TouchableOpacity
        onPress={() => {setUseCustomInvites(false)}}
        style={{...styles.default, marginTop: 10, backgroundColor: useCustomInvites ? "grey" : "#F23F8A"}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>ALL FRIENDS - Default</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {openCustomInvites()}}
      style={{...styles.grey_box, marginTop: 10, backgroundColor: useCustomInvites ? "#F23F8A" : "grey"}}>
      < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>{useCustomInvites ? "CUSTOM" : "SELECT..."}</Text>
    </TouchableOpacity>
    <View>
      <Text style={{...styles.location, marginTop: 24, fontSize: 25, fontWeight: 'bold', color: "black"}}>Time</Text>
    </View>
      <TouchableOpacity
        onPress={() => {setTimeOffset(0)}}
        style={{...styles.default, marginTop: 10, backgroundColor: timeOffset == 0 ? "#F23F8A" : "grey"}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>NOW-DEFAULT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {setTimeOffset(1)}}
        style={{...styles.grey_box, marginTop: 10, backgroundColor: timeOffset == 1 ? "#F23F8A" : "grey"}}>
        < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>5 MINS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {setTimeOffset(2)}}
        style = {{...styles.grey_box, marginTop: 10, backgroundColor: timeOffset == 2 ? "#F23F8A" : "grey"}}>
        < Text style={{fontSize: 25, fontWeight: 'bold', color: "#EEE"}}>10 MINS</Text>
      </TouchableOpacity>
    </ScrollView>
    {/* Do not put this one in the scroll */}
    <TouchableOpacity onPress={() => {submit()}} style = {{...styles.eat, marginTop: 10, backgroundColor: "#2BD55B"}}>
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
    width: DEVICE_WIDTH,
    paddingBottom: 8,
    //paddingTop: 12,
  }
});

export default Eat;
