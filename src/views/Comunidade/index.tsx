import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {useTracker} = require('@socialize/react-native-meteor');

import {ContainerPage} from '../../components/ContainerPage';
import {ComunidadeItem} from './comunidadeItem';
import {ComunidadesCollection} from '../../../imports/api/comunidades';

export const Comunidade = () => {
  const styles = getStyles();
  const COMUNIDADE = useTracker(() => ComunidadesCollection.find().fetch());

  return (
    <ContainerPage titulo={'NOSSA COMUNIDADE'}>
      <FlatList
        style={styles.flatList}
        numColumns={1}
        data={COMUNIDADE}
        renderItem={({item}) => <ComunidadeItem {...item} />}
        keyExtractor={(item) => item.media}
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
