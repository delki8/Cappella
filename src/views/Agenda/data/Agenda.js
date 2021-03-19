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
    dia: 'domingo',
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
    dia: 'segunda',
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
    dia: 'terça',
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
    dia: 'quarta',
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
