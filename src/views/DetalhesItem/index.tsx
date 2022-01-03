import React from 'react';

import {AoVivo} from '../AoVivo';
import {Eventos} from '../Eventos';
import {Contribua} from '../Contribua';
import {RouteProp} from '@react-navigation/core';
import {RootStackParamList} from '../../../App';
import {Agenda} from '../Agenda';
import {Contato} from '../Contato';

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
    case 'agenda':
      return <Agenda />;
    case 'eventos':
      return <Eventos titulo={titulo} />;
    case 'contato':
      return <Contato />;
    default:
      break;
  }
};
