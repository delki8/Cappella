import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  FONT_FAMILY_SEMI_BOLD,
  SIZE_SMALL,
  BEIGE,
  SHADOW_BEIGE,
} from '../styles/styles';

export const GenericItem = ({titulo, icon, width, height, onNavigate}) => {
  const styles = getStyles(width, height);

  return (
    <TouchableOpacity style={styles.containerItem} onPress={onNavigate}>
      {icon}
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (width, height) => {
  return StyleSheet.create({
    containerItem: {
      width,
      height,
      backgroundColor: BEIGE,
      borderRadius: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 1,
      shadowColor: SHADOW_BEIGE,
    },
    imagem: {
      height: 84,
    },
    texto: {
      marginTop: 8,
      fontFamily: FONT_FAMILY_SEMI_BOLD,
      fontSize: SIZE_SMALL,
      color: '#848486',
    },
  });
};
