import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {GenericItem} from '../../../../components/GenericItem';
import {SvgXml} from 'react-native-svg';
import {RootStackParamList} from '../../../../../App';
import {StackNavigationProp} from '@react-navigation/stack';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Item'
>;

interface Props {
  imagem: string | JSX.Element;
  titulo: string;
  textoCard?: string;
  id: string;
  url?: string;
}

export const Item = ({imagem, titulo, textoCard, id, url}: Props) => {
  const navigation: ProfileScreenNavigationProp = useNavigation();

  return (
    <GenericItem
      textoCard={textoCard}
      url={url}
      icon={
        typeof imagem === 'string' ? (
          <SvgXml xml={imagem} height={hp('7%')} />
        ) : (
          imagem
        )
      }
      width={wp('100%')}
      height={hp('16.6%')}
      onNavigate={() =>
        navigation.push('DetalhesItem', {
          titulo,
          id,
        })
      }
    />
  );
};
