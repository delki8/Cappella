import {
  BEIGE,
  DARKBEIGE,
  BLUE,
  GREEN,
  LIGHTTITLE,
  LIGHTBLUE,
  DARKGREEN,
} from '../../../styles/styles';

export const AGENDA = [
  {
    dia: 'Domingo',
    atividades: [
      {
        backgroundColor: BEIGE,
        color: LIGHTTITLE,
        atividade: 'Escola biblica dominical',
        horario: 10,
      },
      {
        backgroundColor: DARKBEIGE,
        color: LIGHTTITLE,
        atividade: 'Culto noturno',
        horario: 19,
      },
    ],
  },
  {
    dia: 'Segunda-feira',
    atividades: [
      {
        backgroundColor: BLUE,
        color: LIGHTBLUE,
        atividade: 'Ensaio do coral',
        horario: 20,
      },
    ],
  },
  {
    dia: 'Terça-feira',
    atividades: [
      {
        backgroundColor: GREEN,
        color: BLUE,
        atividade: 'Reunião dos jovens',
        horario: 20,
      },
    ],
  },
  {
    dia: 'Quarta-feira',
    atividades: [
      {
        backgroundColor: DARKGREEN,
        color: BLUE,
        atividade: 'Estudo bíblico e oração',
        horario: 20,
      },
    ],
  },
];
