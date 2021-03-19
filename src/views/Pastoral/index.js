import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {PASTORAL} from './data/Pastoral';
import {
  FONT_AVENIR_ROMAN,
  FONT_AVENIR_BOOK,
  FONT_AVENIR_BLACK,
  IRON,
  SUBTEXT,
} from '../../styles/styles';

export const Pastoral = () => {
  const styles = getStyles();

  return (
    <ContainerPage>
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>{PASTORAL.titulo}</Text>
        <Text style={styles.autor}>{PASTORAL.autor}</Text>
        <Text style={styles.descricao}>{PASTORAL.descricao}</Text>
      </ScrollView>
    </ContainerPage>
  );
};

const getStyles = (size) => {
  return StyleSheet.create({
    container: {
      marginTop: hp('5%'),
      width: wp('80%'),
    },
    titulo: {
      fontSize: wp('6%'),
      fontFamily: FONT_AVENIR_BLACK,
      alignSelf: 'center',
      color: IRON,
    },
    autor: {
      fontSize: wp('3%'),
      fontFamily: FONT_AVENIR_BOOK,
      alignSelf: 'flex-end',
      color: SUBTEXT,
    },
    descricao: {
      fontSize: wp('4.4%'),
      fontFamily: FONT_AVENIR_ROMAN,
      color: IRON,
    },
  });
};
