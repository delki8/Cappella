import React from 'react';
import {StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';
import {SIZE_LARGE} from '../../styles/styles';
import {getSize} from '../../utils/utils';
import {MISSAO} from './data/Missao';
import {MissaoItem} from './missaoItem';

export const Missao = ({imagem, titulo}) => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));

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

const getHeight = (size) => {
  switch (size) {
    case 'small':
      return 380;
    case 'medium':
      return 540;
    case 'regular':
      return 650;
    case 'big':
      return 800;
    default:
      break;
  }
};

const getStyles = (size) => {
  return StyleSheet.create({
    flatList: {
      marginTop: SIZE_LARGE,
      height: getHeight(size),
    },
  });
};
