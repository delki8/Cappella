/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OneSignal from 'react-native-onesignal';
import {NotificationContextProvider} from './src/utils/NotificationContext';

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
OneSignal.setAppId('2c373247-c946-4129-ae38-c05accad3d67');
// TESTE: OneSignal.setAppId('97bc067c-2344-4a86-a6b1-0206f51df4e9');
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse((response) => {
  console.log('Prompt response:', response);
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(
  (notificationReceivedEvent) => {
    console.log(
      'OneSignal: notification will show in foreground:',
      notificationReceivedEvent,
    );
    let notification = notificationReceivedEvent.getNotification();
    console.log('notification: ', notification);
    const data = notification.additionalData;
    console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  },
);

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler((notification) => {
  console.log('OneSignal: notification opened:', notification);
});
