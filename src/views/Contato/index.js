import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';
import {ACTIVE_GREEN} from '../../styles/styles';
import {CONTATO} from './data/Contato';

export const Contato = () => {
  const {logo, endereco, telefone} = CONTATO;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ContainerPage titulo={'Contato'}>
        <>
          <Image source={logo} style={styles.imagem} resizeMode="contain" />
          <View style={styles.containerEnderecoMapa}>
            <View>
              <View style={styles.containerEndereco}>
                <Image
                  source={require('../../assets/images/location.png')}
                  style={styles.icons}
                />
                <Text style={styles.endereco}>{endereco}</Text>
              </View>
              <View style={styles.containerEndereco}>
                <Image
                  source={require('../../assets/images/telefone.png')}
                  style={styles.icons}
                />
                <Text style={styles.telefone}>{telefone}</Text>
              </View>
            </View>
          </View>
        </>
      </ContainerPage>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  imagem: {
    marginBottom: -50,
    width: 216,
    height: 216,
    alignSelf: 'auto',
  },
  icons: {
    width: 20,
    height: 18,
  },
  containerEndereco: {
    flexDirection: 'row',
    width: 240,
    height: 85,
  },
  containerEnderecoMapa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'auto',
  },
  endereco: {
    color: ACTIVE_GREEN,
  },
  telefone: {
    color: ACTIVE_GREEN,
  },
});
