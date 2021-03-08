import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';
import {SIZE_LARGE} from '../../styles/styles';
import {MISSAO} from './data/Missao';
import {MissaoItem} from './missaoItem';

export const Missao = ({imagem, titulo}) => {
  return (
    <ContainerPage imagem={imagem} titulo={titulo}>
      <FlatList
        style={styles.flatList}
        numColumns={1}
        data={MISSAO}
        renderItem={({item}) => <MissaoItem {...item} />}
        keyExtractor={(item) => item.nome}
      />
    </ContainerPage>
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: SIZE_LARGE,
  },
});
