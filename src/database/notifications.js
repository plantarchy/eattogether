import { db } from './config';
import { getDoc, doc } from 'firebase/firestore';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { updateUserData } from './user';

export async function updateTokenInStore(uid, token) {
    updateUserData(uid, { token });
}

export async function notifyFriends(friends) {
  for (let friend of friends) {
    const user = await getDoc(doc(db, "users", friend.id));
    if (!user.exists()) {
      throw new Error("No user :(")
    }
    const data = user.data();
    console.log(data);
    sendPushNotification(data.token, {"Haaaaa": "bbbb"})
  }
}

export async function sendPushNotification(expoPushToken, data) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'EatWithMe!',
    body: 'And here is the body!',
    data,
  };

  console.log("SEND", message)

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

export async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  return token;
}
