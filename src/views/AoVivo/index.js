import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';
import {FONT_FAMILY_REGULAR, TITLE, GRAY} from '../../styles/styles';

export const AoVivo = ({imagem, titulo}) => {
  return (
    <ContainerPage imagem={imagem}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Estamos ao vivo</Text>
        <View style={styles.containerItem}>
          <Image
            source={require('../../assets/images/video-icon.png')}
            style={styles.imagem}
            resizeMode="contain"
          />
        </View>
      </View>
    </ContainerPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: TITLE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  containerItem: {
    width: 284,
    height: 177.53,
    backgroundColor: GRAY,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
  },
  imagem: {
    height: 84,
  },
});
