import React, {useCallback} from 'react';
import {Alert, Linking, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ContainerPage} from '../../components/ContainerPage';
import {
  FONT_FAMILY_BOLD,
  SIZE_XXX_LARGE,
  TITLE,
  DARKORANGE,
} from '../../styles/styles';
import {COMUNIDADE} from './data/Comunidade';

export const Comunidade = ({imagem}) => {
  const {facebook, whatsapp, instagram} = COMUNIDADE;

  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <ContainerPage imagem={imagem} titulo={'Nossa comunidade'}>
      <TouchableOpacity
        style={styles.containerComunidade}
        onPress={() => handlePress(facebook)}>
        <Text style={styles.redes}>Seguir no Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerComunidade}
        onPress={() => handlePress(whatsapp)}>
        <Text style={styles.redes}>Entrar no grupo do Whatsapp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerComunidade}
        onPress={() => handlePress(instagram)}>
        <Text style={styles.redes}>Seguir no Instagram</Text>
      </TouchableOpacity>
    </ContainerPage>
  );
};

const styles = StyleSheet.create({
  containerComunidade: {
    width: 177,
    height: 76,
    margin: SIZE_XXX_LARGE,
    borderWidth: 3,
    borderColor: DARKORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  redes: {
    color: TITLE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_BOLD,
    textAlign: 'center',
  },
});
