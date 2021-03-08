import React, {useCallback} from 'react';
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';
import {
  FONT_FAMILY_REGULAR,
  TITLE,
  GRAY,
  SIZE_XXX_LARGE,
  FONT_FAMILY_LIGHT,
} from '../../styles/styles';
import {AOVIVO} from './data/AoVivo';

export const AoVivo = ({imagem, titulo}) => {
  const url = AOVIVO.url;

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <ContainerPage imagem={imagem} titulo={titulo}>
      <Text style={styles.titulo}>Assine nosso canal</Text>
      <TouchableOpacity style={styles.containerItem} onPress={handlePress}>
        <Image
          source={require('../../assets/images/video-icon.png')}
          style={styles.imagem}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.notificacoes}>
        Ative as notificações para ser sempre avisado quando estamos Ao Vivo!
      </Text>
    </ContainerPage>
  );
};

const styles = StyleSheet.create({
  titulo: {
    color: TITLE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    marginTop: 200,
  },
  notificacoes: {
    color: TITLE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_LIGHT,
    width: 202,
    textAlign: 'center',
  },
  containerItem: {
    width: 284,
    height: 177.53,
    backgroundColor: GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    margin: SIZE_XXX_LARGE,
    borderColor: TITLE,
    borderWidth: 3,
  },
  imagem: {
    height: 84,
  },
});
