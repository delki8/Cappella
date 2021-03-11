import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  FONT_FAMILY_SEMI_BOLD,
  WHITE,
  ORANGE,
  SIZE_X_SMALL,
} from '../styles/styles';

export const Botao = ({titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoContainer: {
    backgroundColor: ORANGE,
    padding: SIZE_X_SMALL,
    borderRadius: 30,
    opacity: 0.56,
  },
  botaoTexto: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: 20,
    color: WHITE,
    textAlign: 'center',
  },
});
