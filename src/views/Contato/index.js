import React from 'react';
import {
  Alert,
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  IconArroba,
  IconLocation,
  IconTelefone,
  IconContato,
} from '../../assets/images/Icons';
import {Botao} from '../../components/botao';
import {ContainerPage} from '../../components/ContainerPage';
import {
  BEIGE,
  FONT_AVENIR_ROMAN,
  IRON,
  SIZE_LARGE,
  SIZE_SMALL,
  SIZE_XX_LARGE,
  SUBTEXT,
} from '../../styles/styles';
import {CONTATO} from './data/Contato';
import {getSize} from '../../utils/utils';

export const Contato = () => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));
  const {logo, endereco, telefone, email, localizacao, missao} = CONTATO;

  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ContainerPage imagem={IconContato}>
        <View style={styles.container}>
          <Image source={logo} style={styles.imagem} resizeMode="contain" />
          <View style={styles.containerMissao}>
            <Text style={styles.missao}>{missao}</Text>
          </View>
          <View style={styles.containerTexto}>
            <View style={styles.containerEndereco}>
              <SvgXml xml={IconArroba} width={25} height={42} />
              <Text style={styles.text}>{email}</Text>
            </View>
            <View style={styles.containerEndereco}>
              <SvgXml xml={IconTelefone} width={25} height={25.45} />
              <Text style={styles.text}>{telefone}</Text>
            </View>
            <View style={styles.containerEndereco}>
              <SvgXml xml={IconLocation} width={25} height={43.05} />
              <Text style={styles.text}>{endereco}</Text>
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

const getStyles = (size) => {
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
      marginBottom: -100,
      marginTop: -200,
    },
    containerEndereco: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: SIZE_SMALL,
    },
    text: {
      color: SUBTEXT,
      marginLeft: SIZE_LARGE,
      textAlign: 'left',
      fontFamily: FONT_AVENIR_ROMAN,
      fontSize: wp('4.3%'),
      lineHeight: wp('6.3%'),
    },
    botao: {
      marginTop: size === 'small' ? SIZE_SMALL : SIZE_XX_LARGE,
    },
    containerMissao: {
      marginTop: -50,
      width: wp('100%'),
      height: hp('16%'),
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
