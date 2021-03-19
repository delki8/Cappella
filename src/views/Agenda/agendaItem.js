import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  FONT_AVENIR_BLACK,
  FONT_AVENIR_ROMAN,
  DARKBEIGE,
  BLUE,
  BEIGE,
} from '../../styles/styles';

export const AgendaItem = ({atividade, horario}) => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.containerHorario}>
        <Text style={styles.horario}>{horario}</Text>
      </View>
      <View style={styles.containerAtividade}>
        <Text style={styles.atividade}>{atividade}</Text>
      </View>
    </View>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: wp('80%'),
    },
    containerAtividade: {
      alignItems: 'center',
      justifyContent: 'center',
      width: wp('53%'),
      height: hp('8.5%'),
      marginBottom: hp('1.2%'),
      backgroundColor: DARKBEIGE,
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 1,
    },
    containerHorario: {
      alignItems: 'center',
      justifyContent: 'center',
      width: wp('19%'),
      marginBottom: hp('1.2%'),
      backgroundColor: BEIGE,
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 1,
    },
    horario: {
      color: BLUE,
      fontSize: wp('6.3%'),
      fontFamily: FONT_AVENIR_BLACK,
    },
    atividade: {
      color: BLUE,
      fontSize: wp('4.7%'),
      textAlign: 'center',
      fontFamily: FONT_AVENIR_ROMAN,
    },
  });
};
