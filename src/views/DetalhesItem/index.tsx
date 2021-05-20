import React from 'react';

import {AoVivo} from '../AoVivo';
import {Contribua} from '../Contribua';
import {Comunidade} from '../Comunidade';
import {RouteProp} from '@react-navigation/core';
import {RootStackParamList} from '../../../App';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'DetalhesItem'>;

interface Props {
  route: ProfileScreenRouteProp;
}

export const DetalhesItem = ({route}: Props) => {
  const {titulo, id} = route.params;

  switch (id) {
    case 'aoVivo':
      return <AoVivo titulo={titulo} />;
    case 'contribua':
      return <Contribua />;
    case 'comunidade':
      return <Comunidade />;
    default:
      break;
  }
};
