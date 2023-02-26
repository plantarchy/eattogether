import React, { useState } from 'react';
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

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
export let addedUsers = []


const InviteNewFriends = props => {

    const [selected, setSelected] = useState(false);

    return (
        <>
            {/* need to toggle to get rid of name when removed */}
            <TouchableOpacity onPress={() => {const doThis = props => {
                if (selected) {
                    addedUsers.push(props.friendID)
                } else {
                    addedUsers.pop(props.friendID)
                }}
                console.log(addedUsers);

                setSelected(!selected)
            }}>
                <View style={{ ...styles.background, backgroundColor: "#666", marginBottom: 16 }}>
                            <Text style={{ fontSize: 25, color: "#EEE" }}>{props.name}</Text>
                            <Image
                            defaultSource={require("../../assets/addFriend.png")}
                            source={selected ? require("../../assets/remove.png") : require("../../assets/addFriend.png")}
                            style={{ width: 40, height: 40, marginLeft: "auto" }}
                            />


                </View>
            </TouchableOpacity>


        </>

    )

}
// flex direction col then flex direction row to move it up and down

const styles = StyleSheet.create({
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
    background: {
        display: "flex",
        flexDirection: "row",
        padding: 16,
        backgroundColor: "#666",
        width: DEVICE_WIDTH * 0.9,
        //justifyContent: "center",
        borderRadius: 15,
        color: "#EEE"
    },
    user: {
        display: "flex",
        flexDirection: "column",
        alignItems: "right",
        justifyContent: "center",
    },
    filledstar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //marginLeft: "auto",
    },
})
export default InviteNewFriends
