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
  imagem: string;
  titulo: string;
  textoCard: string;
  id: string;
}

export const Item = ({imagem, titulo, textoCard, id}: Props) => {
  const navigation: ProfileScreenNavigationProp = useNavigation();

  return (
    <GenericItem
      textoCard={textoCard}
      icon={<SvgXml xml={imagem} height={hp('7%')} />}
      width={wp('34.5%')}
      height={hp('18%')}
      onNavigate={() =>
        navigation.push('DetalhesItem', {
          titulo,
          id,
        })
      }
    />
  );
};
