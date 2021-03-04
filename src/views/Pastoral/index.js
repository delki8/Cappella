import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  LIGHTERGRAY,
  LIGHTGRAY,
  SIZE_MEDIUM,
  SIZE_SMALL,
  SIZE_X_LARGE,
  SIZE_X_SMALL,
  WHITE,
} from '../../styles/styles';

export const Pastoral = ({route}) => {
  const {imagem, titulo, itemDesc} = route.params;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemContainer}>
        <View style={styles.itemPosicao}>
          <View style={styles.item}>
            <View style={styles.headerPosicao}>
              <View>
                <Text style={styles.textInferior}>{titulo}</Text>
              </View>
              <Image source={imagem} style={styles.imagemItem} />
            </View>
            <Text style={styles.textoDescricao}>{itemDesc}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 4,
    marginTop: -60,
  },
  itemPosicao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  headerPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSuperior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: SIZE_MEDIUM,
    marginBottom: 4,
  },
  textMedio: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: SIZE_X_LARGE,
    marginBottom: 4,
  },
  textInferior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: SIZE_SMALL,
    color: LIGHTGRAY,
    marginBottom: SIZE_X_SMALL,
  },
  imagemItem: {
    width: 32,
    height: 72,
  },
  textoDescricao: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: SIZE_SMALL,
    color: LIGHTERGRAY,
  },
});
