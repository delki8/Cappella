import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  FONT_AVENIR_BLACK,
  FONT_AVENIR_ROMAN,
  SIZE_X_LARGE,
  SIZE_LARGE,
} from '../../styles/styles';
import {getSize} from '../../utils/utils';

export const AgendaItem = ({atividade, horario, backgroundColor, color}) => {
  const {height} = useWindowDimensions();
  const size = getSize(height);
  const styles = getStyles(backgroundColor, color, size);

  return (
    <View style={styles.containerItem}>
      <View style={styles.containerHorario}>
        <Text style={styles.horario}>{horario}</Text>
        <Text style={styles.horas}>horas</Text>
      </View>
      <Text style={styles.atividade}>{atividade}</Text>
    </View>
  );
};

const getStyles = (backgroundColor, color, size) => {
  return StyleSheet.create({
    containerItem: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: wp('90%'),
      height: hp('8.5%'),
      marginBottom: 10,
      backgroundColor,
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
      marginLeft: SIZE_LARGE,
      width: 44,
    },
    horario: {
      color,
      fontSize: wp('7%'),
      fontFamily: FONT_AVENIR_BLACK,
    },
    horas: {
      color,
      fontSize: wp('4%'),
      fontFamily: FONT_AVENIR_ROMAN,
    },
    atividade: {
      color,
      fontSize: wp('5%'),
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'left',
      fontFamily: FONT_AVENIR_BLACK,
      marginRight: SIZE_X_LARGE,
    },
  });
};
