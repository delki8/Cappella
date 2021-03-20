import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {FONT_AVENIR_ROMAN} from '../../styles/styles';

export const MissaoItem = ({nome, missao, contato, backgroundColor, color}) => {
  const styles = getStyles(backgroundColor, color);

  return (
    <View style={styles.containerMissao}>
      <View style={styles.containerItem}>
        <Text style={styles.missao}>{nome}</Text>
        <Text style={styles.missao}>{missao}</Text>
        <Text style={styles.missao}>{contato}</Text>
      </View>
    </View>
  );
};

const getStyles = (backgroundColor, color) => {
  return StyleSheet.create({
    missao: {
      color,
      fontSize: wp('4%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
    },
    containerMissao: {
      width: wp('80%'),
      marginBottom: hp('1%'),
    },
    containerItem: {
      height: hp('8%'),
      backgroundColor,
      justifyContent: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
  });
};
