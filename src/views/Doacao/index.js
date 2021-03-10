import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';
import {
  TITLE,
  SIZE_XXX_LARGE,
  FONT_FAMILY_LIGHT,
  BEIGE,
  ORANGE,
  FONT_FAMILY_REGULAR,
  WHITE,
  IRON,
} from '../../styles/styles';
import {IconDoacao} from '../../assets/images/Icons';
import {DOACAO} from './data/Doacao';

export const Doacao = () => {
  const {nomeBanco, banco, agencia, cc, operacao, igreja, cnpj} = DOACAO;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ContainerPage imagem={IconDoacao} titulo={'Doação'}>
        <Text style={styles.titulo}>Dados da nossa conta</Text>
        <View style={styles.containerConta}>
          <View style={styles.banco}>
            <Text style={styles.conta}>{nomeBanco}</Text>
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.conta}>{banco}</Text>
            <Text style={styles.conta}>{agencia}</Text>
            <Text style={styles.conta}>{cc}</Text>
            <Text style={styles.conta}>{operacao}</Text>
          </View>
        </View>
        <Text style={styles.detalhesIgreja}>{igreja}</Text>
        <Text style={styles.detalhesIgreja}>{cnpj}</Text>
      </ContainerPage>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  conta: {
    color: ORANGE,
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: 'center',
  },
  titulo: {
    color: TITLE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    marginTop: 200,
  },
  detalhesIgreja: {
    color: TITLE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_LIGHT,
    textAlign: 'center',
  },
  containerConta: {
    width: 284,
    height: 132,
    margin: SIZE_XXX_LARGE,
  },
  banco: {
    width: 284,
    height: 38,
    backgroundColor: WHITE,
    borderColor: IRON,
    borderWidth: 0.5,
    justifyContent: 'center',
    shadowOpacity: 0.1,
  },
  containerItem: {
    width: 283,
    height: 81,
    backgroundColor: BEIGE,
    justifyContent: 'center',
    shadowOffset: {
      width: 0.2,
      height: 0.2,
    },
    shadowOpacity: 0.2,
  },
});
