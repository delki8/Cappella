import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  SIZE_X_LARGE,
  SIZE_LARGE,
} from '../../styles/styles';
import {getSize} from '../../utils/utils';

export const AgendaItem = ({atividade, horario, backgroundColor, color}) => {
  const {height} = useWindowDimensions();
  const size = getSize(height);
  const styles = getStyles(backgroundColor, color, size);

  return (
    <View style={styles.containerAgenda}>
      <View style={styles.containerItem}>
        <View style={styles.containerHorario}>
          <Text style={styles.horario}>{horario}</Text>
          <Text style={styles.horas}>horas</Text>
        </View>
        <Text style={styles.atividade}>{atividade}</Text>
      </View>
    </View>
  );
};

const getStyles = (backgroundColor, color, size) => {
  return StyleSheet.create({
    containerAgenda: {
      width: wp('90%'),
      height: size === 'small' ? hp('18%') : hp('11%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerItem: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: size === 'small' ? wp('90%') : wp('80%'),
      height: size === 'small' ? hp('15%') : hp('10%'),
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
      height: 45,
    },
    horario: {
      color,
      fontSize: 38,
      fontFamily: FONT_FAMILY_BOLD,
    },
    horas: {
      color,
      fontSize: 16,
      fontFamily: FONT_FAMILY_REGULAR,
    },
    atividade: {
      color,
      fontSize: 14,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'left',
      fontFamily: FONT_FAMILY_BOLD,
      marginRight: SIZE_X_LARGE,
    },
  });
};
