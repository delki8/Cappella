import React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {PASTORAL} from './data/Pastoral';
import {
  SIZE_XX_LARGE,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_LIGHT,
} from '../../styles/styles';
import {getSize} from '../../utils/utils';

export const Pastoral = () => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));

  return (
    <ContainerPage titulo={PASTORAL.titulo}>
      <ScrollView style={styles.container}>
        <Text style={styles.autor}>{PASTORAL.autor}</Text>
        <Text style={styles.descricao}>{PASTORAL.descricao}</Text>
      </ScrollView>
    </ContainerPage>
  );
};

const getHeight = (size) => {
  switch (size) {
    case 'small':
      return hp('65%');
    case 'medium':
      return hp('74%');
    case 'regular':
      return hp('77%');
    case 'big':
      return hp('100%');
    default:
      break;
  }
};

const getStyles = (size) => {
  return StyleSheet.create({
    container: {
      marginTop: SIZE_XX_LARGE,
      height: getHeight(size),
      width: wp('80%'),
    },
    autor: {
      fontSize: 11,
      fontFamily: FONT_FAMILY_LIGHT,
    },
    descricao: {
      fontSize: 14,
      fontFamily: FONT_FAMILY_REGULAR,
    },
  });
};
