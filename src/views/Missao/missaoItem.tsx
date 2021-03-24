import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  FONT_AVENIR_BLACK,
  FONT_AVENIR_ROMAN,
  SUBTEXT,
} from '../../styles/styles';

interface Props {
  nome: string;
  missao: string | undefined;
  contato: string | undefined;
  backgroundColor: string;
}

export const MissaoItem = ({nome, missao, contato, backgroundColor}: Props) => {
  const styles = getStyles(backgroundColor);

  return (
    <View style={styles.container}>
      {nome && <Text style={styles.nome}>{nome}</Text>}
      {missao && <Text style={styles.missao}>{missao}</Text>}
      {contato && <Text style={styles.missao}>{contato}</Text>}
    </View>
  );
};

const getStyles = (backgroundColor: string) => {
  return StyleSheet.create({
    nome: {
      color: SUBTEXT,
      fontSize: wp('4.3%'),
      fontFamily: FONT_AVENIR_BLACK,
      textAlign: 'center',
      width: wp('73%'),
      lineHeight: hp('2.8%'),
    },
    missao: {
      color: SUBTEXT,
      fontSize: wp('4.3%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
      width: wp('73%'),
      lineHeight: hp('2.8%'),
    },
    container: {
      width: wp('81%'),
      height: hp('10.6%'),
      marginBottom: hp('1%'),
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
  });
};
