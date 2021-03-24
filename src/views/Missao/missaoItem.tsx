import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {FONT_AVENIR_ROMAN, SUBTEXT} from '../../styles/styles';

interface Props {
  nome: string;
  missao: string | undefined;
  contato: string | undefined;
  backgroundColor: string;
}

export const MissaoItem = ({nome, missao, contato, backgroundColor}: Props) => {
  const styles = getStyles(backgroundColor);

  return (
    <View style={styles.containerMissao}>
      <Text style={styles.missao}>{missao ? `${nome} (${missao})` : nome}</Text>
      {contato && <Text style={styles.missao}>{contato}</Text>}
    </View>
  );
};

const getStyles = (backgroundColor: string) => {
  return StyleSheet.create({
    missao: {
      color: SUBTEXT,
      fontSize: 18,
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
      width: 250,
    },
    containerMissao: {
      width: 302,
      height: 64,
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
