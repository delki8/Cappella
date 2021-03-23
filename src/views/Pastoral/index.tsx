import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {PASTORAL} from './data/Pastoral';
import {
  FONT_AVENIR_ROMAN,
  FONT_AVENIR_BOOK,
  FONT_AVENIR_BLACK,
  IRON,
  SUBTEXT,
} from '../../styles/styles';
import {getSize} from '../../utils/utils';

export const Pastoral = () => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));

  return (
    <ContainerPage>
      <View style={styles.containerPagina}>
        <ScrollView style={styles.container}>
          <Text style={styles.titulo}>{PASTORAL.titulo.toUpperCase()}</Text>
          <Text style={styles.autor}>{PASTORAL.autor}</Text>
          <Text style={styles.descricao}>{PASTORAL.descricao}</Text>
        </ScrollView>
      </View>
    </ContainerPage>
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
      return hp('75%');
    default:
      break;
  }
};

const getStyles = (size: string) => {
  return StyleSheet.create({
    containerPagina: {
      alignItems: 'center',
    },
    container: {
      marginTop: hp('5%'),
      width: wp('90%'),
      height: getHeight(size),
    },
    titulo: {
      fontSize: wp('6%'),
      fontFamily: FONT_AVENIR_BLACK,
      alignSelf: 'center',
      textAlign: 'center',
      color: IRON,
    },
    autor: {
      fontSize: wp('3%'),
      fontFamily: FONT_AVENIR_BOOK,
      alignSelf: 'flex-end',
      color: SUBTEXT,
    },
    descricao: {
      fontSize: wp('4.4%'),
      fontFamily: FONT_AVENIR_ROMAN,
      color: IRON,
      lineHeight: wp('6.3%'),
    },
  });
};
