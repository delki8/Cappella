import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {GenericItem} from '../../../../components/GenericItem.js';
import {SvgXml} from 'react-native-svg';

export const Item = ({imagem, titulo, itemDesc, id}) => {
  const navigation = useNavigation();

  return (
    <GenericItem
      titulo={titulo}
      icon={<SvgXml xml={imagem} height={hp('7%')} />}
      width={wp('100%')}
      height={hp('15%')}
      onNavigate={() =>
        navigation.push('DetalhesItem', {
          itemDesc,
          imagem,
          titulo,
          id,
        })
      }
    />
  );
};
