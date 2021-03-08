import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  SIZE_X_LARGE,
} from '../../styles/styles';

export const AgendaItem = ({atividade, horario, backgroundColor, color}) => {
  const styles = getStyles(backgroundColor, color);

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

const getStyles = (backgroundColor, color) => {
  return StyleSheet.create({
    containerHorario: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: SIZE_X_LARGE,
      width: 44,
      height: 67,
    },
    horario: {
      color,
      fontSize: 40,
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
      fontFamily: FONT_FAMILY_BOLD,
      marginRight: SIZE_X_LARGE,
    },
    containerAgenda: {
      width: 284,
      height: 102,
    },
    containerItem: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 283,
      height: 81,
      backgroundColor,
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
    },
  });
};
