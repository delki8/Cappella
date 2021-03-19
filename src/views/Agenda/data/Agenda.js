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
        atividade: 'escola dominical',
        horario: '10:00',
      },
      {
        backgroundColor: DARKBEIGE,
        color: LIGHTTITLE,
        atividade: 'culto noturno',
        horario: '19:00',
      },
    ],
  },
  {
    dia: 'segunda',
    atividades: [
      {
        backgroundColor: BLUE,
        color: LIGHTBLUE,
        atividade: 'ensaio do coral',
        horario: '20:00',
      },
    ],
  },
  {
    dia: 'terça',
    atividades: [
      {
        backgroundColor: GREEN,
        color: BLUE,
        atividade: 'reunião dos jovens',
        horario: '20:00',
      },
    ],
  },
  {
    dia: 'quarta',
    atividades: [
      {
        backgroundColor: DARKGREEN,
        color: BLUE,
        atividade: 'estudo bíblico e oração',
        horario: '20:00',
      },
    ],
  },
];
