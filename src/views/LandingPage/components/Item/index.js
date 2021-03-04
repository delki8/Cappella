import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  FONT_FAMILY_SEMI_BOLD,
  SIZE_SMALL,
  WHITE,
} from '../../../../styles/styles';
import {SvgXml} from 'react-native-svg';

export const Item = ({imagem, titulo, itemDesc, id}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() =>
        navigation.push('DetalhesItem', {
          itemDesc,
          imagem,
          titulo,
          id,
        })
      }>
      <SvgXml xml={imagem} width={66} height={65} />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    width: 137,
    height: 150,
    backgroundColor: WHITE,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  imagem: {
    height: 84,
  },
  texto: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: SIZE_SMALL,
    color: '#848486',
  },
});
