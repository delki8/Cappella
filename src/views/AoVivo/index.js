import React, {useCallback} from 'react';
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {
  TITLE,
  GRAY,
  FONT_AVENIR_BOOK,
  FONT_AVENIR_ROMAN,
} from '../../styles/styles';
import {getSize} from '../../utils/utils';
import {AOVIVO} from './data/AoVivo';

export const AoVivo = ({imagem, titulo}) => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));

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
      <View style={styles.container}>
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
      </View>
    </ContainerPage>
  );
};

const getStyles = (size) => {
  return StyleSheet.create({
    container: {
      width: wp('100%'),
      alignItems: 'center',
    },
    titulo: {
      color: TITLE,
      fontSize: wp('5%'),
      fontFamily: FONT_AVENIR_ROMAN,
      paddingVertical: hp('10%'),
    },
    notificacoes: {
      color: TITLE,
      fontSize: wp('5%'),
      fontFamily: FONT_AVENIR_BOOK,
      textAlign: 'center',
    },
    containerItem: {
      width: wp('70%'),
      height: size === 'small' ? hp('25%') : hp('20%'),
      backgroundColor: GRAY,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: TITLE,
      borderWidth: 3,
      marginBottom: 50,
    },
    imagem: {
      height: 84,
    },
  });
};
