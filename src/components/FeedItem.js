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
  ScrollView,
  StatusBar,
} from 'react-native';
import { navigationRef } from '../lib/navigation'

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const Post = props => {

  return (
  <>
  <TouchableOpacity onPress={() => (navigationRef.current?.navigate("eat"))} style={{...styles.feedItem, backgroundColor: props.bgColor}}>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.text}>{`${props.person.owner}`}</Text>
      <View style={{flexGrow: 1}}>
        <Text style={{...styles.text, alignSelf: 'flex-end'}}>{props.person.offset ? ("in " + props.person.offset + " minutes") : "Now"}</Text>
      </View>
    </View>
    <Text style={styles.text}>{props.person.location}</Text>
  </TouchableOpacity>
  </>
  )
}

const styles = StyleSheet.create({
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

export default Post;
