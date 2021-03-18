import React from 'react';
import {StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
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
      return 370;
    case 'medium':
      return 440;
    case 'large':
      return 520;
    case 'xlarge':
      return 570;
    case 'xxlarge':
      return 665;
    case 'xxxlarge':
      return 820;
    default:
      break;
  }
};

const getStyles = (size) => {
  return StyleSheet.create({
    flatList: {
      paddingVertical: hp('2%'),
      height: getHeight(size),
    },
  });
};
