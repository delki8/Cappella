import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONT_FAMILY_REGULAR} from '../../styles/styles';

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
      fontSize: 14,
      fontFamily: FONT_FAMILY_REGULAR,
      textAlign: 'center',
    },
    containerMissao: {
      width: 284,
      height: 102,
    },
    containerItem: {
      width: 283,
      height: 81,
      backgroundColor,
      justifyContent: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
    },
  });
};
