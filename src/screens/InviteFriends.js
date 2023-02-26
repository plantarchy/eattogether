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

import InviteNewFriends from '../components/InviteFriendsObject';
import { GlobalContext } from '../modules/GlobalContext';

const InviteFriends = props => {
    let itemsFav = []
    let itemsReg = []


    const { friends, setFriends } = useContext(GlobalContext);
    // let friends = ["Ryan", "John", "Ford", "Green Knight"]
    // let favs = ["Grendel", "Grendels Mother", "Dawg"]
    let favs = [];
    // GIVEN VIA VINCENTS DB

    for (let friend of friends) {
        // items is a list of objects with the friends names
        itemsReg.push(
            <InviteNewFriends key={`${friend.id}`} friendID={friend.id} name={friend.name} favor={false} />
        )
    }
    //<View style={{borderBottomColor: "#CCCCCC", borderBottomWidth: 1}}></View>

    for (let fav of favs) {
        // items is a list of objects with the friends names
        itemsFav.push(
            <InviteNewFriends key={`${fav.id}`} friendID={fav.id} name={fav.name} favor={false} />
        )
    }

    return (
        // take in the list of friends and run a loop to display all of them in their own boxes?
        <>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image
                        source={require("../../assets/left-arrow.png")}
                        style={{ width: 24, height: 24, marginLeft: 24 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 24, marginLeft: DEVICE_WIDTH / 4 - 2, marginRight: "auto", }}>Invite to Eat</Text>
                <View style={{ width: 24, marginRight: 6 }} />
                <TouchableOpacity onPress={() => {const sendData = props => {
                    // sends the list to the server
                    props.navigation.goBack();
                }}}>
                    <Image
                        source={require("../../assets/submitIcon.png")}
                        style={{ width: 27, height: 27, marginRight: 20}}
                    />
                    {/* <Text style={{ fontSize: 24, marginLeft: "auto", marginRight: 15 }}>Submit</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>{itemsReg}<View style={{ borderBottomColor: "#CCCCCC", borderBottomWidth: 3, marginBottom: 12 }}></View>{itemsFav}<View style={{ height: DEVICE_HEIGHT / 4 }}></View></ScrollView>

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
    restaurant: {
        display: "flex",
        flexDirection: "row",
        padding: 16,
        backgroundColor: "#666",
        width: DEVICE_WIDTH * 0.7,
        alignItems: "center",
        borderRadius: 15,
        color: "#EEE"
    },
    addButton: {
        display: "flex",
        zIndex: 99,
        justifyContent: "flex-end",
        alignSelf: 'flex-end',
        bottom: 48,
        backgroundColor: 'transparent',
        position: 'absolute',
        paddingRight: 15
    },
    textInput: {
        width: DEVICE_WIDTH * 0.7,
        padding: 16,
        backgroundColor: "#666",
        borderRadius: 15,
    }
});

export default InviteFriends;
