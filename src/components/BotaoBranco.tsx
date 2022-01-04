import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {WHITE, JUMBO, FONT_AVENIR_BLACK} from '../styles/styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface Props {
  titulo: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const BotaoBranco = ({titulo, onPress}: Props) => {
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
      backgroundColor: WHITE,
      width: wp('20%'),
      height: hp('3.5%'),
      borderRadius: 10,
      justifyContent: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
    botaoTexto: {
      fontFamily: FONT_AVENIR_BLACK,
      fontSize: wp('2.3%'),
      color: JUMBO,
      textAlign: 'center',
    },
  });
};
