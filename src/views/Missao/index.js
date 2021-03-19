import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {MISSAO} from './data/Missao';
import {MissaoItem} from './missaoItem';

export const Missao = ({imagem, titulo}) => {
  const styles = getStyles();
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

const getStyles = () => {
  return StyleSheet.create({
    flatList: {
      paddingVertical: hp('7%'),
    },
  });
};
