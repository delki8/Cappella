import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {FONT_AVENIR_ROMAN, PAMPAS, PIPER} from '../../styles/styles';

interface Props {
  titulo: string;
}

export const Eventos = ({titulo}: Props) => {
  const styles = getStyles();

  return (
    <ContainerPage titulo={titulo}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/semEventos.png')}
          style={styles.imagem}
          resizeMode="contain"
        />
        <Text style={styles.semEventos}>Nenhum evento programado</Text>
      </View>
    </ContainerPage>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      marginTop: hp('15%'),
      alignItems: 'center',
      backgroundColor: PAMPAS,
    },
    semEventos: {
      color: PIPER,
      fontSize: wp('5%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
    },
    imagem: {
      height: hp('40%'),
    },
  });
};
