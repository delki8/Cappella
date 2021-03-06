import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ContainerPage} from '../../components/ContainerPage';
import {PASTORAL} from '../../dados/Pastoral';
import {
  TITLE,
  SIZE_LARGE,
  SIZE_X_LARGE,
  SIZE_XX_LARGE,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_LIGHT,
} from '../../styles/styles';

export const Pastoral = () => {
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

const styles = StyleSheet.create({
  container: {
    marginTop: SIZE_XX_LARGE,
    marginLeft: SIZE_X_LARGE,
    marginRight: SIZE_LARGE,
  },
  titulo: {
    color: TITLE,
    fontSize: 21,
    fontFamily: FONT_FAMILY_BOLD,
    marginBottom: SIZE_LARGE,
  },
  autor: {
    fontSize: 11,
    fontFamily: FONT_FAMILY_LIGHT,
  },
  descricao: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    marginTop: 0,
    width: '100%',
  },
});
