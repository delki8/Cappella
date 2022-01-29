/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OneSignal from 'react-native-onesignal';
import {NotificationContextProvider} from './src/utils/NotificationContext';
import AsyncStorage from '@react-native-community/async-storage';
import {notifyMeKey} from './src/components/NotificationBell';

AppRegistry.registerComponent(
  appName,
  () => (props) => (
    <NotificationContextProvider>
      <App {...props} />
    </NotificationContextProvider>
  ),
  () => App,
);

//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
// OneSignal.setAppId('2c373247-c946-4129-ae38-c05accad3d67');
OneSignal.setAppId('97bc067c-2344-4a86-a6b1-0206f51df4e9');
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse((response) => {
  console.log('Prompt response:', response);
});

//Method for handling notifications received while app is opened
OneSignal.setNotificationWillShowInForegroundHandler(
  (notificationReceivedEvent) => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem(notifyMeKey);
        console.debug(`value recovered from storage was ${notifyMeKey}`);
        return value === 'true';
      } catch (e) {
        console.error(e);
      }
    };

    getData().then((notifyMe) => {
      if (notifyMe) {
        notificationReceivedEvent.complete(
          notificationReceivedEvent.getNotification(),
        );
      } else {
        notificationReceivedEvent.complete();
      }
    });
  },
);

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler((notification) => {
  console.log('OneSignal: notification opened:', notification);
});
