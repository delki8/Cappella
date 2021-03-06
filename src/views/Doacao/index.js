import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';
import {IconDoacao} from '../../assets/images/Icons';

export const Doacao = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContainerPage imagem={IconDoacao}>
        <Text style={styles.containerTitulo}>Doação</Text>
      </ContainerPage>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitulo: {
    textAlign: 'center',
    marginTop: 300,
  },
});
