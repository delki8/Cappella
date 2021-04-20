import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {useTracker} = require('@socialize/react-native-meteor');

import {Botao} from '../../components/botao';
import {ContainerPage} from '../../components/ContainerPage';
import {
  BEIGE,
  FONT_AVENIR_ROMAN,
  IRON,
  ORANGEBUTTON,
  SUBTEXT,
} from '../../styles/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import {handlePress} from '../../utils/handlePress';
import {ContatoCollection} from '../../../imports/api/contato';

export const Contato = () => {
  const styles = getStyles();
  const CONTATO = useTracker(() => ContatoCollection.find().fetch())[0];
  const {
    logo,
    endereco,
    telefone,
    email,
    localizacao,
    missao,
    pastor,
  } = CONTATO;

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ContainerPage>
        <View style={styles.container}>
          <Image source={logo} style={styles.imagem} resizeMode="contain" />
          <View style={styles.containerMissao}>
            <Text allowFontScaling={false} style={styles.missao}>
              {missao}
            </Text>
          </View>
          <View style={styles.containerTexto}>
            <View style={styles.containerEndereco}>
              <FontAwesomeIcon
                icon={faUserTie}
                color={ORANGEBUTTON}
                size={25}
              />
              <Text allowFontScaling={false} style={styles.text}>
                {pastor}
              </Text>
            </View>
            <View style={styles.containerEndereco}>
              <FontAwesomeIcon
                icon={faEnvelope}
                color={ORANGEBUTTON}
                size={25}
              />
              <Text allowFontScaling={false} style={styles.text}>
                {email}
              </Text>
            </View>
            <View style={styles.containerEndereco}>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                color={ORANGEBUTTON}
                size={25}
              />
              <Text allowFontScaling={false} style={styles.text}>
                {telefone}
              </Text>
            </View>
            <View style={styles.containerEndereco}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                color={ORANGEBUTTON}
                size={25}
              />
              <Text allowFontScaling={false} style={styles.text}>
                {endereco}
              </Text>
            </View>
            <View style={styles.botao}>
              <Botao
                titulo={'Ver no mapa'}
                onPress={() => handlePress(localizacao)}
              />
            </View>
          </View>
        </View>
      </ContainerPage>
    </SafeAreaView>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    droidSafeArea: {
      flex: 1,
    },
    container: {
      paddingVertical: hp('7%'),
    },
    containerTexto: {
      width: wp('73%'),
      alignSelf: 'center',
      marginTop: hp('5.3%'),
    },
    imagem: {
      width: wp('75%'),
      height: hp('50%'),
      alignSelf: 'center',
      marginBottom: -hp('10%'),
      marginTop: -hp('20%'),
    },
    containerEndereco: {
      flexDirection: 'row',
      marginBottom: hp('1.8%'),
    },
    text: {
      color: SUBTEXT,
      marginLeft: wp('5%'),
      textAlign: 'left',
      fontFamily: FONT_AVENIR_ROMAN,
      fontSize: wp('4.3%'),
      lineHeight: wp('6.3%'),
    },
    botao: {
      marginTop: hp('3%'),
    },
    containerMissao: {
      marginTop: -50,
      width: wp('100%'),
      height: hp('17%'),
      backgroundColor: BEIGE,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
    missao: {
      width: wp('90%'),
      color: IRON,
      fontSize: wp('3.9%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
      lineHeight: wp('5.3%'),
    },
  });
};
