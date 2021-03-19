import React from 'react';
import {
  Alert,
  Image,
  Linking,
  Platform,
  SafeAreaView,
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
import {
  TITLE,
  FONT_AVENIR_BOOK,
  BEIGE,
  EXTRAORANGE,
  WHITE,
  IRON,
  FONT_AVENIR_ROMAN,
  FONT_AVENIR_BLACK,
} from '../../styles/styles';
import {CONTRIBUA} from './data/Contribua';
const handlePress = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export const Contribua = () => {
  const styles = getStyles();
  const {nomeBanco, banco, agencia, cc, operacao, igreja, cnpj} = CONTRIBUA;

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ContainerPage titulo={'CONTRIBUA'}>
        <View style={styles.container}>
          <Text style={styles.titulo}>DEPÓSITO EM CONTA</Text>
          <View style={styles.containerConta}>
            <View style={styles.banco}>
              <Text style={styles.conta}>{nomeBanco}</Text>
            </View>
            <View style={styles.containerBanco}>
              <Text style={styles.conta}>{banco}</Text>
              <Text style={styles.conta}>{agencia}</Text>
              <Text style={styles.conta}>{cc}</Text>
              <Text style={styles.conta}>{operacao}</Text>
            </View>
          </View>

          <Text style={styles.titulo}>TRANSFERÊNCIA POR PIX</Text>
          <View style={styles.containerConta}>
            <View style={styles.containerPix}>
              <Text style={styles.conta}>{`Chave:  ${cnpj}`}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.containerPixInfo}
            onPress={() =>
              handlePress('https://www.bcb.gov.br/estabilidadefinanceira/pix')
            }>
            <Text style={styles.pix}>clique aqui e saiba mais sobre o pix</Text>
            <Image
              source={require('../../assets/images/logoPix.png')}
              style={styles.pixImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerIgreja}>
          <Text style={styles.detalhesIgreja}>{igreja}</Text>
          <Text style={styles.detalhesIgreja}>{`cnpj ${cnpj}`}</Text>
        </View>
      </ContainerPage>
    </SafeAreaView>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 10 : 0,
    },
    container: {
      width: wp('100%'),
      alignItems: 'center',
      paddingVertical: hp('7%'),
    },
    conta: {
      color: EXTRAORANGE,
      fontSize: wp('4%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
    },
    titulo: {
      color: EXTRAORANGE,
      fontSize: wp('5%'),
      fontFamily: FONT_AVENIR_BLACK,
    },
    detalhesIgreja: {
      color: IRON,
      fontSize: wp('5%'),
      fontFamily: FONT_AVENIR_BOOK,
      textAlign: 'center',
    },
    containerConta: {
      margin: wp('9%'),
    },
    banco: {
      width: wp('73%'),
      height: wp('9%'),
      backgroundColor: WHITE,
      borderColor: EXTRAORANGE,
      borderWidth: 0.5,
      justifyContent: 'center',
      shadowOpacity: 0.1,
      elevation: 1,
    },
    containerBanco: {
      width: wp('73%'),
      height: wp('20%'),
      backgroundColor: BEIGE,
      justifyContent: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
    containerPix: {
      width: wp('73%'),
      height: wp('13%'),
      backgroundColor: BEIGE,
      justifyContent: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
    containerPixInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: wp('73%'),
    },
    pixImg: {
      width: wp('8%'),
      height: hp('4%'),
    },
    cnpj: {
      color: TITLE,
      fontSize: wp('4.5%'),
      fontFamily: FONT_AVENIR_BOOK,
      textAlign: 'center',
    },
    pix: {
      color: TITLE,
      fontSize: wp('3.9%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
    },
    containerIgreja: {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  });
};
