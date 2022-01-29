import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {IRON, ORANGEBUTTON, SIZE_LARGE} from '../styles/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell, faBellSlash} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-community/async-storage';
import {NotificationContext} from '../utils/NotificationContext';

export const notifyMeKey = 'notifyMe';
export const NotificationBell = () => {
  const [optIn, setOptIn] = useState(false);
  const {showNotificationBell} = React.useContext(NotificationContext);

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem(notifyMeKey, value);
      console.log(`valor "${value}" armazenado com sucesso`);
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(notifyMeKey);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData().then((value) => setOptIn(value === 'true'));
  }, []);

  if (!showNotificationBell) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        storeData((!optIn).toString()).then(() => setOptIn(!optIn));
      }}>
      <FontAwesomeIcon
        icon={optIn ? faBell : faBellSlash}
        color={optIn ? ORANGEBUTTON : IRON}
        size={SIZE_LARGE}
      />
    </TouchableOpacity>
  );
};
