import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {MISSAO} from './data/Missao';
import {MissaoItem} from './missaoItem';

export const Missao = ({titulo}) => {
  const styles = getStyles();
  return (
    <ContainerPage titulo={titulo}>
      <View style={styles.containerPagina}>
        <FlatList
          style={styles.flatList}
          numColumns={1}
          data={MISSAO}
          renderItem={({item}) => <MissaoItem {...item} />}
          keyExtractor={(item) => item.nome}
        />
      </View>
    </ContainerPage>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    containerPagina: {
      alignItems: 'center',
    },
    flatList: {
      paddingVertical: hp('7%'),
    },
  });
};
