import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {WHITE, ORANGE, FONT_AVENIR_BLACK} from '../styles/styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Botao = ({titulo, onPress}) => {
  const styles = getStyles();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    botaoContainer: {
      backgroundColor: ORANGE,
      padding: wp('4%'),
      width: wp('73%'),
      height: hp('7%'),
      borderRadius: 50,
      opacity: 0.56,
      justifyContent: 'center',
    },
    botaoTexto: {
      fontFamily: FONT_AVENIR_BLACK,
      fontSize: wp('5%'),
      color: WHITE,
      textAlign: 'center',
    },
  });
};
