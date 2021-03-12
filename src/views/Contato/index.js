import React from 'react';
import {
  Alert,
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
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
  FONT_FAMILY_SEMI_BOLD,
  SIZE_LARGE,
  SIZE_SMALL,
  SIZE_X_LARGE,
  SIZE_XX_LARGE,
} from '../../styles/styles';
import {CONTATO} from './data/Contato';

export const Contato = () => {
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
    <SafeAreaView style={styles.safeArea}>
      <ContainerPage imagem={IconContato}>
        <View style={styles.container}>
          <Image source={logo} style={styles.imagem} resizeMode="contain" />
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
      </ContainerPage>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    marginTop: -70,
    width: wp('80%'),
  },
  imagem: {
    width: 335,
    height: 335,
    marginBottom: -70,
  },
  icons: {
    width: 25,
    height: 25,
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
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: SIZE_LARGE,
  },
  botao: {
    marginTop: SIZE_XX_LARGE,
  },
});
