import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {ComunidadeItem} from './comunidadeItem';
import {COMUNIDADE} from './data/Comunidade';

export const Comunidade = () => {
  const styles = getStyles();

  return (
    <ContainerPage titulo={'COMUNIDADE'}>
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={COMUNIDADE}
        renderItem={({item}) => (
          <ComunidadeItem url={item.url} icon={item.icon} />
        )}
        keyExtractor={(item) => item.url}
      />
    </ContainerPage>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    flatList: {
      paddingVertical: hp('7%'),
      alignContent: 'center',
      alignSelf: 'center',
    },
  });
};
