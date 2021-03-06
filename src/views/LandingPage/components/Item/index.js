import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {GenericItem} from '../../../../components/GenericItem.js';
import {SvgXml} from 'react-native-svg';

export const Item = ({imagem, titulo, itemDesc, id}) => {
  const navigation = useNavigation();

  return (
    <GenericItem
      titulo={titulo}
      icon={<SvgXml xml={imagem} width={66} height={65} />}
      width={137}
      height={150}
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
