import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {getSize} from '../../utils/utils';
import {ComunidadeItem} from './comunidadeItem';
import {COMUNIDADE} from './data/Comunidade';

export const Comunidade = ({imagem}) => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));

  return (
    <ContainerPage imagem={imagem} titulo={'NOSSA COMUNIDADE'}>
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

const getHeight = (size) => {
  switch (size) {
    case 'small':
      return 370;
    case 'medium':
      return 460;
    case 'large':
      return 540;
    case 'xlarge':
      return 590;
    case 'xxlarge':
      return 685;
    case 'xxxlarge':
      return 840;
    default:
      break;
  }
};

const getStyles = (size) => {
  return StyleSheet.create({
    flatList: {
      paddingVertical: hp('5%'),
      height: getHeight(size),
    },
  });
};
