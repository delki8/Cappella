import React, {useCallback} from 'react';
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {TITLE, FONT_AVENIR_ROMAN, WHITE, IRON} from '../../styles/styles';
import {AOVIVO} from './data/AoVivo';

export const AoVivo = ({titulo}) => {
  const styles = getStyles();

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
    <ContainerPage titulo={titulo}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.containerItem} onPress={handlePress}>
          <Image
            source={require('../../assets/images/video-icon.png')}
            style={styles.imagem}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.notificacoes}>
          ative as notificações para ser sempre avisado quando estamos ao vivo!
        </Text>
      </View>
    </ContainerPage>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      width: wp('100%'),
      alignItems: 'center',
      paddingVertical: hp('7%'),
    },
    notificacoes: {
      color: IRON,
      fontSize: wp('4.6%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
    },
    containerItem: {
      width: wp('70%'),
      height: hp('25%'),
      backgroundColor: WHITE,
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
