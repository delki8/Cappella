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
  SIZE_XX_LARGE,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_LIGHT,
} from '../../styles/styles';

export const Pastoral = () => {
  return (
    <ContainerPage titulo={PASTORAL.titulo}>
      <ScrollView style={styles.container}>
        <Text style={styles.autor}>{PASTORAL.autor}</Text>
        <Text style={styles.descricao}>{PASTORAL.descricao}</Text>
      </ScrollView>
    </ContainerPage>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZE_XX_LARGE,
    height: hp('73%'),
    width: wp('80%'),
  },
  autor: {
    fontSize: 11,
    fontFamily: FONT_FAMILY_LIGHT,
  },
  descricao: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
