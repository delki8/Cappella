import React from 'react';
import {StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';
import {SIZE_LARGE} from '../../styles/styles';
import {getSize} from '../../utils/utils';
import {MISSAO} from './data/Missao';
import {MissaoItem} from './missaoItem';

export const Missao = ({imagem, titulo}) => {
  const {width} = useWindowDimensions();
  const styles = getStyles(getSize(width));

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

const getStyles = (size) => {
  return StyleSheet.create({
    flatList: {
      marginTop: SIZE_LARGE,
      height: size === 'small' ? 330 : 630,
    },
  });
};
