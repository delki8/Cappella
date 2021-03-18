import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {
  FONT_AVENIR_BLACK,
  SIZE_XX_SMALL,
  SIZE_X_LARGE,
  TITLE,
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
        {imagem && (
          <View style={styles.containerImagem}>
            <SvgXml xml={imagem} width={38} height={38} />
          </View>
        )}
      </View>
      <Text style={styles.titulo}>{titulo}</Text>
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
    color: TITLE,
    fontSize: wp('4%'),
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
  },
});
