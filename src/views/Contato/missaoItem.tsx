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
}

export const MissaoItem = ({nome, missao, contato}: Props) => {
  const styles = getStyles();
  const hasNome = Boolean(nome && nome.trim().length);
  const hasMissao = Boolean(missao && missao.trim().length);
  const hasContato = Boolean(contato && contato.trim().length);

  return (
    <View style={styles.container}>
      <View style={styles.containerNome}>
        {hasNome && (
          <>
            <Text allowFontScaling={false} style={styles.nome}>
              {nome}
            </Text>
            <Text> </Text>
          </>
        )}
        {hasMissao && (
          <Text allowFontScaling={false} style={[styles.nome, styles.missao]}>
            {missao}
          </Text>
        )}
      </View>
      {hasContato && (
        <Text allowFontScaling={false} style={[styles.nome, styles.missao]}>
          ({contato})
        </Text>
      )}
    </View>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    nome: {
      color: SUBTEXT,
      fontSize: wp('3%'),
      fontFamily: FONT_AVENIR_BLACK,
      textAlign: 'center',
    },
    missao: {
      fontFamily: FONT_AVENIR_ROMAN,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: wp('90%'),
      height: hp('4.3%'),
      marginBottom: hp('1%'),
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
      borderWidth: 1,
    },
    containerNome: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
