import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {FONT_FAMILY_REGULAR} from '../../styles/styles';
import {getSize} from '../../utils/utils';

export const MissaoItem = ({nome, missao, contato, backgroundColor, color}) => {
  const {height} = useWindowDimensions();
  const size = getSize(height);
  const styles = getStyles(backgroundColor, color, size);

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

const getWidth = (size) => {
  switch (size) {
    case 'small':
    case 'medium':
    case 'regular':
      return 284;
    case 'big':
      return 384;
    default:
      break;
  }
};

const getStyles = (backgroundColor, color, size) => {
  return StyleSheet.create({
    missao: {
      color,
      fontSize: 14,
      fontFamily: FONT_FAMILY_REGULAR,
      textAlign: 'center',
    },
    containerMissao: {
      width: getWidth(size),
      height: 102,
    },
    containerItem: {
      height: 81,
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
