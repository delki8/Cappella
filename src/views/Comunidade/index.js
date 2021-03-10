import React from 'react';
import {FlatList} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';
import {ComunidadeItem} from './comunidadeItem';
import {COMUNIDADE} from './data/Comunidade';

export const Comunidade = ({imagem}) => {
  return (
    <ContainerPage imagem={imagem} titulo={'Nossa Comunidade'}>
      <FlatList
        numColumns={1}
        data={COMUNIDADE}
        renderItem={({item}) => <ComunidadeItem {...item} />}
        keyExtractor={(item) => item.media}
      />
    </ContainerPage>
  );
};
