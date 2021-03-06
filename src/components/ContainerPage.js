import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {SIZE_MEDIUM, SIZE_XXX_LARGE, SIZE_X_LARGE} from '../styles/styles';

export const ContainerPage = ({imagem, children}) => {
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
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
