import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SvgXml} from 'react-native-svg';
import {
  FONT_FAMILY_BOLD,
  SIZE_MEDIUM,
  SIZE_XXX_LARGE,
  SIZE_X_LARGE,
  TITLE,
} from '../styles/styles';

export const ContainerPage = ({imagem, titulo, children}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
      <View style={styles.containerPagina}>
        <Text style={styles.titulo}>{titulo}</Text>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
  },
  titulo: {
    color: TITLE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_BOLD,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagemSeta: {
    width: SIZE_X_LARGE,
    height: SIZE_X_LARGE,
    marginTop: SIZE_XXX_LARGE,
    marginLeft: SIZE_X_LARGE,
  },
  containerImagem: {
    padding: SIZE_MEDIUM,
  },
  containerPagina: {
    alignItems: 'center',
  },
});
