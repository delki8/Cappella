import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DescricaoItem} from './componentes/DescricaoItem';

export const DetalhesItem = ({route}) => {
  const {imagem, titulo, itemDesc, id} = route.params;

  return (
    <View style={styles.container}>
      <DescricaoItem
        imagem={imagem}
        titulo={titulo}
        itemDesc={itemDesc}
        id={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
