import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {BOLD, IRON} from '../styles/styles';

export const Aguarde = () => {
  const styles = getStyles();
  return <Text style={styles.aguarde}>Aguarde...</Text>;
};

const getStyles = () => {
  return StyleSheet.create({
    aguarde: {
      fontSize: wp('6%'),
      fontFamily: BOLD,
      alignSelf: 'center',
      textAlign: 'center',
      color: IRON,
    },
  });
};
