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
  ACTIVE_GREEN,
  FONT_AVENIR_ROMAN,
  SIZE_LARGE,
  SIZE_SMALL,
  SIZE_XX_LARGE,
} from '../../styles/styles';
import {CONTATO} from './data/Contato';
import {getSize} from '../../utils/utils';

export const Contato = () => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));
  const {logo, endereco, telefone, email, localizacao} = CONTATO;

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
      width: wp('80%'),
      height: wp('80%'),
      alignSelf: 'center',
    },
    containerTexto: {
      margin: wp('1%'),
    },
    imagem: {
      width: wp('75%'),
      height: hp('50%'),
      alignSelf: 'center',
      marginBottom: -100,
      marginTop: -100,
    },
    containerEndereco: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: SIZE_SMALL,
    },
    text: {
      color: ACTIVE_GREEN,
      marginLeft: SIZE_LARGE,
      textAlign: 'left',
      fontFamily: FONT_AVENIR_ROMAN,
      fontSize: wp('5%'),
    },
    botao: {
      marginTop: size === 'small' ? SIZE_SMALL : SIZE_XX_LARGE,
    },
  });
};
