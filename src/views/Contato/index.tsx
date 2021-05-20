import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Botao} from '../../components/Botao';
import {ContainerPage} from '../../components/ContainerPage';
import {BEIGE, REGULAR, IRON, ORANGEBUTTON, SUBTEXT} from '../../styles/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import {handlePress} from '../../utils/handlePress';
import {ContatoCollection} from '../../../imports/api/contato';
import {handleIsConnected} from '../../utils/handleIsConnected';
import {FALLBACK} from './data/Contato';
import {ContainerServer} from '../../components/ContainerServer';
import {Aguarde} from '../../components/Aguarde';

interface Contato {
  endereco: string;
  telefone: string;
  email: string;
  localizacao: string;
  missao: string;
  pastor: string;
}

export const Contato = () => {
  const styles = getStyles();
  const logo = require('../../assets/images/central.png');
  const [isConnected, setIsConnected] = useState(false);

  handleIsConnected().then((value) => {
    setIsConnected(Boolean(value));
  });

  const contatoItems = (CONTATO: Contato) => {
    const {endereco, telefone, email, localizacao, missao, pastor} = CONTATO;

    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.imagem} resizeMode="contain" />
        <View style={styles.containerMissao}>
          <Text allowFontScaling={false} style={styles.missao}>
            {missao}
          </Text>
        </View>
        <View style={styles.containerTexto}>
          <View style={styles.containerEndereco}>
            <FontAwesomeIcon icon={faUserTie} color={ORANGEBUTTON} size={25} />
            <Text allowFontScaling={false} style={styles.text}>
              {pastor}
            </Text>
          </View>
          <View style={styles.containerEndereco}>
            <FontAwesomeIcon icon={faEnvelope} color={ORANGEBUTTON} size={25} />
            <Text allowFontScaling={false} style={styles.text}>
              {email}
            </Text>
          </View>
          <View style={styles.containerEndereco}>
            <FontAwesomeIcon icon={faPhoneAlt} color={ORANGEBUTTON} size={25} />
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
    );
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ContainerPage>
        {isConnected ? (
          <ContainerServer collection={ContatoCollection}>
            {(collection) => {
              const CONTATO = collection[0];

              return CONTATO ? contatoItems(CONTATO) : <Aguarde />;
            }}
          </ContainerServer>
        ) : (
          contatoItems(FALLBACK)
        )}
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
      marginBottom: -hp('8%'),
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
      fontFamily: REGULAR,
      fontSize: wp('4.3%'),
      lineHeight: wp('6.3%'),
    },
    botao: {
      marginTop: hp('3%'),
    },
    containerMissao: {
      marginTop: -50,
      width: wp('100%'),
      height: hp('15%'),
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
      fontFamily: REGULAR,
      textAlign: 'center',
      lineHeight: wp('5.3%'),
    },
  });
};
