import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {BOLD, IRON, SIZE_XX_SMALL, SIZE_X_LARGE} from '../styles/styles';

interface Props {
  titulo?: string;
  children: JSX.Element | JSX.Element[];
}

export const ContainerPage = ({titulo, children}: Props) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/flecha-esquerda.png')}
            style={styles.imagemSeta}
          />
        </TouchableOpacity>
      </View>
      {titulo && (
        <Text allowFontScaling={false} style={styles.titulo}>
          {titulo}
        </Text>
      )}
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titulo: {
    color: IRON,
    fontSize: wp('5%'),
    fontFamily: BOLD,
    alignSelf: 'center',
  },
  imagemSeta: {
    width: SIZE_X_LARGE,
    height: SIZE_X_LARGE,
    marginLeft: SIZE_X_LARGE,
    marginTop: SIZE_XX_SMALL,
  },
});
