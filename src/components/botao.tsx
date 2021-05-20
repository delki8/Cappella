import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {WHITE, ORANGE, BOLD} from '../styles/styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface Props {
  titulo: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Botao = ({titulo, onPress}: Props) => {
  const styles = getStyles();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text allowFontScaling={false} style={styles.botaoTexto}>
          {titulo}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    botaoContainer: {
      backgroundColor: ORANGE,
      padding: wp('4%'),
      width: wp('73%'),
      height: hp('7%'),
      borderRadius: 50,
      opacity: 0.56,
      justifyContent: 'center',
    },
    botaoTexto: {
      fontFamily: BOLD,
      fontSize: wp('5%'),
      color: WHITE,
      textAlign: 'center',
    },
  });
};
