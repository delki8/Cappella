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
  FONT_AVENIR_BOOK,
  BEIGE,
  ORANGE,
  EXTRAORANGE,
  WHITE,
  IRON,
  FONT_AVENIR_ROMAN,
  FONT_AVENIR_BLACK,
} from '../../styles/styles';
import {CONTRIBUA} from './data/Contribua';
import {getSize} from '../../utils/utils';

const handlePress = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export const Contribua = () => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));
  const {nomeBanco, banco, agencia, cc, operacao, igreja, cnpj} = CONTRIBUA;

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ContainerPage titulo={'CONTRIBUA'}>
        <View style={styles.container}>
          <Text style={styles.titulo}>DADOS DA NOSSA CONTA</Text>
          <View style={styles.containerConta}>
            <View style={styles.banco}>
              <Text style={styles.conta}>{nomeBanco}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.conta}>{banco}</Text>
              <Text style={styles.conta}>{agencia}</Text>
              <Text style={styles.conta}>{cc}</Text>
              <Text style={styles.conta}>{operacao}</Text>
            </View>
          </View>
          <Text style={styles.detalhesIgreja}>{igreja}</Text>

          <TouchableOpacity
            style={styles.containerImagem}
            onPress={() =>
              handlePress('https://www.bcb.gov.br/estabilidadefinanceira/pix')
            }>
            <Image
              source={require('../../assets/images/logoPix.png')}
              style={styles.pix}
            />
            <Text style={styles.cnpj}>{cnpj}</Text>
          </TouchableOpacity>
        </View>
      </ContainerPage>
    </SafeAreaView>
  );
};

const getStyles = (size) => {
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
      color: ORANGE,
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
      width: 284,
      height: 132,
      margin: wp('9%'),
    },
    banco: {
      width: 284,
      height: 38,
      backgroundColor: WHITE,
      borderColor: IRON,
      borderWidth: 0.5,
      justifyContent: 'center',
      shadowOpacity: 0.1,
      elevation: 1,
    },
    containerItem: {
      width: 283,
      height: 81,
      backgroundColor: BEIGE,
      justifyContent: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
    containerImagem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    pix: {
      width: wp('10%'),
      height: wp('10%'),
    },
    cnpj: {
      color: TITLE,
      fontSize: wp('4.5%'),
      fontFamily: FONT_AVENIR_BOOK,
      textAlign: 'center',
    },
  });
};
