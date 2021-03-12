import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
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
  SIZE_XXX_LARGE,
  FONT_FAMILY_LIGHT,
  BEIGE,
  ORANGE,
  FONT_FAMILY_REGULAR,
  WHITE,
  IRON,
  SIZE_XX_SMALL,
} from '../../styles/styles';
import {IconContribua} from '../../assets/images/Icons';
import {CONTRIBUA} from './data/Contribua';
import {getSize} from '../../utils/utils';

export const Contribua = () => {
  const {width} = useWindowDimensions();
  const styles = getStyles(getSize(width));
  const {nomeBanco, banco, agencia, cc, operacao, igreja, cnpj} = CONTRIBUA;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ContainerPage imagem={IconContribua} titulo={'Contribua'}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Dados da nossa conta</Text>
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
          <Text style={styles.detalhesIgreja}>{cnpj}</Text>
        </View>
      </ContainerPage>
    </SafeAreaView>
  );
};

const getStyles = (size) => {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      width: wp('100%'),
      alignItems: 'center',
    },
    conta: {
      color: ORANGE,
      fontSize: 14,
      fontFamily: FONT_FAMILY_REGULAR,
      textAlign: 'center',
    },
    titulo: {
      color: TITLE,
      fontSize: size === 'small' ? 16 : 18,
      fontFamily: FONT_FAMILY_REGULAR,
      marginTop: size === 'small' ? 50 : 150,
    },
    detalhesIgreja: {
      color: TITLE,
      fontSize: 16,
      fontFamily: FONT_FAMILY_LIGHT,
      textAlign: 'center',
    },
    containerConta: {
      width: 284,
      height: 132,
      margin: size === 'small' ? SIZE_XX_SMALL : SIZE_XXX_LARGE,
    },
    banco: {
      width: 284,
      height: 38,
      backgroundColor: WHITE,
      borderColor: IRON,
      borderWidth: 0.5,
      justifyContent: 'center',
      shadowOpacity: 0.1,
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
    },
  });
};
