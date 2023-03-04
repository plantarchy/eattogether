import React, { useState, useEffect, useContext, useReducer } from 'react';
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
  ScrollView,
  StatusBar,
} from 'react-native';
import { navigationRef } from '../lib/navigation'
import { getCurrentEats, listEats } from '../database/eat'

import EatIcon from '../components/EatIcon';
import FriendsIcon from '../components/FriendsIcon';
import LocationsIcon from '../components/FavLocationsIcon';
import FeedItem from '../components/FeedItem';
import { GlobalContext } from '../modules/GlobalContext'
import { deleteEat } from '../database/eat'
import { sendPushNotificationUser } from '../database/notifications'

const Feed = props => {
  const { user, setUser } = useContext(GlobalContext);
  const [ currentEats, setCurrentEats ] = useState([]);
  const [ feedItems, setFeedItems ] = useState([]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    (async () => {
      setCurrentEats(await getCurrentEats(user.id, setCurrentEats));
      setFeedItems(await listEats(user.id, (feedItems) => {
        console.log("GOT CALLBACK", feedItems);
        setFeedItems(feedItems);
        forceUpdate();
      }));
    })()
  }, [])

  const handleCurrentFeedClick = async (eatID) => {
    Alert.alert(
      'Cancel or end meal session?',
      'You can configure a new one using the Eat button.',
      [ { text: 'Cancel', style: 'cancel', },
      {
        text: 'OK',
        style: "destructive",
        onPress: () => {
          console.log("DELETING", eatID)
          deleteEat(eatID)
        }
      },
      ]
    );
  }

  let items = [];
  console.log("UDPAGE", currentEats)

  for (let i = 0; i < currentEats.length; i++) {
    console.log("agwiohag", currentEats)
    items.push(
      <FeedItem
        key={-i}
        person={currentEats[0]}
        eatID={currentEats[0].id}
        bgColor={'#F23F8A'}
        onClick={handleCurrentFeedClick}
      />
    )
  }

  for (let i = 0; i < feedItems.length; i++) {
    items.push(
      <FeedItem
        key={i}
        eatID={feedItems[i].id}
        person={feedItems[i]}
        bgColor={'#2BD55B'}
        onClick={(eatID, person) => {
          sendPushNotificationUser(person.ownerID, {
            sound: 'default',
            title: 'EatWithMe!',
            body: `${user.name} will be joining you to eat.`,
            data: {}
          })
        }}
      />
    )
  };

  return (
  <>
    <View style={styles.container}>
      <ScrollView style={{width: DEVICE_WIDTH}}>{items}<View style={{height: DEVICE_HEIGHT / 4}}></View></ScrollView>
    </View>
    <View style={styles.southPanel}></View>
    <EatIcon/>
    <FriendsIcon/>
    <LocationsIcon/>
  </>
  )
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({

  user: {
    padding: 16,
    backgroundColor: "#666",
    width: DEVICE_WIDTH * 0.7,
    alignItems: "center",
    borderRadius: 15,
    color: "#EEE"
  },
  southPanel: {
    display: "flex",
    width: DEVICE_WIDTH,
    height: 100,
    backgroundColor: "blue",
    justifyContent: "flex-end",
  },
  container: {
    display: "flex",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center"
  },
  feedItem: {
    display: "flex",
    flexDirection: "column",
    padding: 30,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#2BD55B"
  },
  text: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 20
  },
});

export default Feed;
