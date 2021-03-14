import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {
  FONT_FAMILY_BOLD,
  SIZE_MEDIUM,
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
      <View style={styles.containerPagina}>
        <Text style={styles.titulo}>{titulo}</Text>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
    marginLeft: SIZE_X_LARGE,
  },
  containerImagem: {
    marginRight: SIZE_X_LARGE,
    marginTop: -10,
  },
  containerPagina: {
    alignItems: 'center',
  },
});
