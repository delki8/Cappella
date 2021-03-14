import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {
  FONT_FAMILY_SEMI_BOLD,
  WHITE,
  ORANGE,
  SIZE_X_SMALL,
  SIZE_XX_SMALL,
} from '../styles/styles';
import {getSize} from '../utils/utils';

export const Botao = ({titulo, onPress}) => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (size) => {
  return StyleSheet.create({
    botaoContainer: {
      backgroundColor: ORANGE,
      padding: size === 'small' ? SIZE_XX_SMALL : SIZE_X_SMALL,
      borderRadius: 30,
      opacity: 0.56,
    },
    botaoTexto: {
      fontFamily: FONT_FAMILY_SEMI_BOLD,
      fontSize: size === 'small' ? 16 : 20,
      color: WHITE,
      textAlign: 'center',
    },
  });
};
