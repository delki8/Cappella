import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {TITLE, FONT_AVENIR_ROMAN, WHITE, IRON} from '../../styles/styles';
import {handlePress} from '../../utils/handlePress';
import {AOVIVO} from './data/AoVivo';

interface Props {
  titulo: string;
}

export const AoVivo = ({titulo}: Props) => {
  const styles = getStyles();

  return (
    <ContainerPage titulo={titulo}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => handlePress(AOVIVO.url)}>
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
      width: wp('73%'),
      color: IRON,
      fontSize: wp('4.6%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
      lineHeight: wp('6.8%'),
    },
    containerItem: {
      width: wp('73%'),
      height: hp('20%'),
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
