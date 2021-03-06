import React from 'react';

import {AoVivo} from '../AoVivo';
import {Doacao} from '../Doacao';
import {Comunidade} from '../Comunidade';
import {Missao} from '../Missao';

export const DetalhesItem = ({route}) => {
  const {imagem, titulo, id} = route.params;

  switch (id) {
    case 'aoVivo':
      return <AoVivo imagem={imagem} titulo={titulo} />;
    case 'doacao':
      return <Doacao imagem={imagem} titulo={titulo} />;
    case 'comunidade':
      return <Comunidade imagem={imagem} titulo={titulo} />;
    case 'missao':
      return <Missao imagem={imagem} titulo={titulo} />;
    default:
      break;
  }
};
