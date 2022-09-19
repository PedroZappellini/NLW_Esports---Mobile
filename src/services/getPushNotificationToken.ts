import * as Notifications from "expo-notifications";

async function getPushNotificationToken() {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();
  }

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    console.log("NOTIFICATION TOKEN => ", pushToken.data);

    return pushToken.data;
  }
}

export default getPushNotificationToken;
