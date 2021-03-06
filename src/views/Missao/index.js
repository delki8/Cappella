import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';

export const Missao = ({imagem, titulo}) => {
  return (
    <ContainerPage imagem={imagem}>
      <Text style={styles.containerTitulo}>{titulo}</Text>
    </ContainerPage>
  );
};

const styles = StyleSheet.create({
  containerTitulo: {
    textAlign: 'center',
    marginTop: 300,
  },
});
