import React, {useState} from 'react';
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
import Clipboard from '@react-native-community/clipboard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {
  TITLE,
  SEMIBOLD,
  BEIGE,
  EXTRAORANGE,
  WHITE,
  IRON,
  REGULAR,
  BOLD,
  RED,
} from '../../styles/styles';
import {getSize} from '../../utils/utils';
import {ContribuaCollection} from '../../../imports/api/contribua';
import {FALLBACK} from './data/Contribua';
import {ContainerServer} from '../../components/ContainerServer';
import {handleIsConnected} from '../../utils/handleIsConnected';
import {Aguarde} from '../../components/Aguarde';

const handlePress = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

interface Contribua {
  nomeBanco: string;
  banco: string;
  agencia: string;
  cc: string;
  operacao: string;
  igreja: string;
  cnpj: string;
}

export const Contribua = () => {
  const [cnpjCopiado, setCnpjCopiado] = useState(false);
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));
  const [isConnected, setIsConnected] = useState(false);

  handleIsConnected().then((value) => {
    setIsConnected(Boolean(value));
  });

  const copyToClipboard = (cnpj: string) => {
    Clipboard.setString(cnpj);
    setCnpjCopiado(true);
  };

  const contribuaItems = (CONTRIBUA: Contribua) => {
    const {nomeBanco, banco, agencia, cc, operacao, igreja, cnpj} = CONTRIBUA;

    return (
      <View style={styles.container}>
        <Text allowFontScaling={false} style={styles.titulo}>
          DEPÓSITO EM CONTA
        </Text>
        <View style={styles.containerConta}>
          <View style={styles.banco}>
            <Text allowFontScaling={false} style={styles.conta}>
              {nomeBanco}
            </Text>
          </View>
          <View style={styles.containerBanco}>
            <Text allowFontScaling={false} style={styles.conta}>
              {banco}
            </Text>
            <Text allowFontScaling={false} style={styles.conta}>
              {agencia}
            </Text>
            <Text allowFontScaling={false} style={styles.conta}>
              {cc}
            </Text>
            <Text allowFontScaling={false} style={styles.conta}>
              {operacao}
            </Text>
          </View>
        </View>

        <Text allowFontScaling={false} style={styles.titulo}>
          TRANSFERÊNCIA POR PIX
        </Text>
        <View style={styles.containerConta}>
          <View style={styles.containerPix}>
            <TouchableOpacity onPress={() => copyToClipboard(cnpj)}>
              <Text
                allowFontScaling={false}
                style={styles.conta}>{`Chave:  ${cnpj}`}</Text>
            </TouchableOpacity>
            {cnpjCopiado && (
              <Text allowFontScaling={false} style={styles.copiedText}>
                {'CNPJ copiado'}
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.containerPixInfo}
          onPress={() =>
            handlePress('https://www.bcb.gov.br/estabilidadefinanceira/pix')
          }>
          <Text allowFontScaling={false} style={styles.pix}>
            clique aqui e saiba mais sobre o pix
          </Text>
          <Image
            source={require('../../assets/images/logoPix.png')}
            style={styles.pixImg}
          />
        </TouchableOpacity>
        <View style={styles.containerIgreja}>
          <Text allowFontScaling={false} style={styles.detalhesIgreja}>
            {igreja}
          </Text>
          <Text
            allowFontScaling={false}
            style={styles.detalhesIgreja}>{`cnpj ${cnpj}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ContainerPage titulo={'CONTRIBUA'}>
        {isConnected ? (
          <ContainerServer collection={ContribuaCollection}>
            {(collection) => {
              const CONTRIBUA = collection[0];

              return CONTRIBUA ? contribuaItems(CONTRIBUA) : <Aguarde />;
            }}
          </ContainerServer>
        ) : (
          contribuaItems(FALLBACK)
        )}
      </ContainerPage>
    </SafeAreaView>
  );
};

const getHeight = (size: string) => {
  switch (size) {
    case 'small':
    case 'medium':
      return hp('69%');
    case 'large':
    case 'xlarge':
    case 'xxlarge':
    case 'xxxlarge':
      return hp('77%');
    default:
      break;
  }
};

const getStyles = (size: string) => {
  return StyleSheet.create({
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
    conta: {
      color: EXTRAORANGE,
      fontSize: wp('4.5%'),
      fontFamily: REGULAR,
      textAlign: 'center',
      lineHeight: wp('6.3%'),
    },
    container: {
      width: wp('100%'),
      height: getHeight(size),
      alignItems: 'center',
      paddingVertical: hp('7%'),
    },
    containerBanco: {
      width: wp('73%'),
      height: hp('14%'),
      backgroundColor: BEIGE,
      justifyContent: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
    containerConta: {
      margin: wp('7.5%'),
    },
    containerIgreja: {
      marginTop: hp('4%'),
    },
    containerPix: {
      width: wp('73%'),
      height: hp('6%'),
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
    cnpj: {
      color: TITLE,
      fontFamily: SEMIBOLD,
      textAlign: 'center',
    },
    copiedText: {
      color: RED,
      textAlign: 'center',
    },
    droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 5 : 0,
    },
    detalhesIgreja: {
      color: IRON,
      fontSize: wp('5%'),
      fontFamily: SEMIBOLD,
      textAlign: 'center',
      lineHeight: wp('7.2%'),
    },
    titulo: {
      color: EXTRAORANGE,
      fontSize: wp('5%'),
      fontFamily: BOLD,
    },
    pixImg: {
      width: wp('8%'),
      height: hp('4%'),
    },
    pix: {
      color: TITLE,
      fontSize: wp('3.9%'),
      fontFamily: REGULAR,
      textAlign: 'center',
    },
  });
};
