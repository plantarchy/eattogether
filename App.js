import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import Feed from './src/screens/Feed';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Splash from './src/screens/Splash';
import FriendsTop from './src/screens/FriendsTop'
import Eat from './src/screens/Eat'
import Presets from './src/screens/Presets'
import Locations from './src/screens/Locations'

// import TabHeader from './src/components/TabHeader';
import { navigationRef } from './src/lib/navigation'
import React, {useEffect, useMemo, useContext, useState, useRef} from 'react';
import { getAuth, reauthenticateWithCredential } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext, GlobalProvider } from './src/modules/GlobalContext'
import { sendPushNotification, registerForPushNotificationsAsync, updateTokenInStore } from './src/database/notifications';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



const renderScene = SceneMap({
  feed: Feed,
  preset: Presets,

});

const Stack = createStackNavigator();

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

function App() {
  const layout = useWindowDimensions();


  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const { user, setUser } = useContext(GlobalContext);
  const {pushToken, setPushToken} = useContext(GlobalContext);
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
      let token = await AsyncStorage.getItem("pushToken")
      if (token == null) token = await registerForPushNotificationsAsync();
      await AsyncStorage.setItem("pushToken", token)
      await updateTokenInStore(user.id, token)
      setPushToken(token)
    })();
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'feed', title: 'Feed' },
    { key: 'preset', title: 'Presets' },

  ]);

  function MainScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          { index === 0 ? <View style={{ width: 24, marginLeft: 24 }} /> :
          <TouchableOpacity onPress={() => (setIndex(index - 1))}>
            <Image
              source={require("./assets/left-arrow.png")}
              style={{width: 24, height: 24, marginLeft: 24 }}
            />
          </TouchableOpacity>
          }
          <Text style={{ fontSize: 24, marginLeft: "auto", marginRight: "auto", }}>{routes[index].title}</Text>
          { index === routes.length - 1 ? <View style={{ width: 24, marginRight: 24 }} /> :
          <TouchableOpacity onPress={() => (setIndex(index + 1))}>
            <Image
              source={require("./assets/right-arrow.png")}
              style={{width: 24, height: 24, marginRight: 24 }}
            />
          </TouchableOpacity>
          }
        </View>
        <TabView
          renderTabBar={() => null}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor="#F2F2F2"
        barStyle="light-content"
      />

      <SafeAreaView style={{ flex:0, backgroundColor: '#F2F2F2' }} />
      <Stack.Navigator initialRouteName="splash" screenOptions={{

        headerShown: false
      }}>
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="eat" component={Eat} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="friendsTop" component={FriendsTop} />
        <Stack.Screen name="location" component={Locations} />

      </Stack.Navigator>
      <SafeAreaView style={{ flex:0, backgroundColor: '#F2F2F2' }} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
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

export default () => (
  <GlobalProvider>
    <App />
  </GlobalProvider>
)
