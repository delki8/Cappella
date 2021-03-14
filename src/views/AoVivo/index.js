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
  FONT_FAMILY_REGULAR,
  TITLE,
  GRAY,
  SIZE_XXX_LARGE,
  SIZE_XX_SMALL,
  FONT_FAMILY_LIGHT,
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
      fontSize: size === 'small' ? 16 : 18,
      fontFamily: FONT_FAMILY_REGULAR,
      marginTop: size === 'small' ? 50 : 100,
    },
    notificacoes: {
      color: TITLE,
      fontSize: 16,
      fontFamily: FONT_FAMILY_LIGHT,
      textAlign: 'center',
    },
    containerItem: {
      width: wp('70%'),
      height: size === 'small' ? hp('25%') : hp('20%'),
      backgroundColor: GRAY,
      justifyContent: 'center',
      alignItems: 'center',
      margin: size === 'small' ? SIZE_XX_SMALL : SIZE_XXX_LARGE,
      borderColor: TITLE,
      borderWidth: 3,
    },
    imagem: {
      height: 84,
    },
  });
};
