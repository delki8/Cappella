import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  FONT_AVENIR_BLACK,
  IRON,
  SIZE_XX_SMALL,
  SIZE_X_LARGE,
} from '../styles/styles';

export const ContainerPage = ({imagem, titulo, children}) => {
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
      {titulo && <Text style={styles.titulo}>{titulo}</Text>}
      <View style={styles.containerPagina}>{children}</View>
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
    fontFamily: FONT_AVENIR_BLACK,
    alignSelf: 'center',
  },
  imagemSeta: {
    width: SIZE_X_LARGE,
    height: SIZE_X_LARGE,
    marginLeft: SIZE_X_LARGE,
    marginTop: SIZE_XX_SMALL,
  },
  containerImagem: {
    marginRight: SIZE_X_LARGE,
  },
  containerPagina: {
    alignItems: 'center',
    height: hp('80%'),
  },
});
