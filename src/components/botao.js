import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {WHITE, ORANGE, FONT_AVENIR_BLACK} from '../styles/styles';
import {getSize} from '../utils/utils';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
      padding: wp('4%'),
      borderRadius: 23,
      opacity: 0.56,
    },
    botaoTexto: {
      fontFamily: FONT_AVENIR_BLACK,
      fontSize: wp('5%'),
      color: WHITE,
      textAlign: 'center',
    },
  });
};
