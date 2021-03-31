import React from 'react';
import {FlatList, StyleSheet, useWindowDimensions, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {useTracker} = require('@socialize/react-native-meteor');

import {ContainerPage} from '../../components/ContainerPage';
import {getSize} from '../../utils/utils';
import {MissaoItem} from './missaoItem';
import {MissaoCollection} from '../../../imports/api/missao';

interface Props {
  titulo: string;
}

export const Missao = ({titulo}: Props) => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));
  const MISSAO = useTracker(() => MissaoCollection.find().fetch());

  return (
    <ContainerPage titulo={titulo}>
      <View style={styles.containerPagina}>
        <FlatList
          style={styles.flatList}
          numColumns={1}
          data={MISSAO}
          renderItem={({item}) => (
            <MissaoItem
              nome={item.nome}
              missao={item.missao}
              contato={item.contato}
              backgroundColor={item.backgroundColor}
            />
          )}
          keyExtractor={(item) => item.nome}
        />
      </View>
    </ContainerPage>
  );
};

const getHeight = (size: string) => {
  switch (size) {
    case 'small':
    case 'medium':
      return hp('69%');
    case 'large':
    case 'xlarge':
    case 'xxlarge':
    case 'xxxlarge':
      return hp('75%');
    default:
      break;
  }
};

const getStyles = (size: string) => {
  return StyleSheet.create({
    containerPagina: {
      alignItems: 'center',
    },
    flatList: {
      marginTop: hp('5%'),
      height: getHeight(size),
    },
  });
};
