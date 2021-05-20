import {DARKBEIGE, LIGHTTITLE} from '../../../styles/styles';

export const FALLBACK = [
  {
    dia: 'domingo',
    data: [
      {
        atividade: 'escola dominical',
        horario: '09:30',
      },
      {
        backgroundColor: DARKBEIGE,
        color: LIGHTTITLE,
        atividade: 'culto noturno',
        horario: '19:30',
      },
    ],
  },
  {
    dia: 'quinta',
    data: [
      {
        atividade: 'estudo biblico',
        horario: '19:30',
      },
    ],
  },
  {
    dia: 'sexta',
    data: [
      {
        atividade: 'pequeno grupo - adolescentes',
        horario: '19:30',
      },
    ],
  },
  {
    dia: 'sabado',
    data: [
      {
        atividade: 'culto noturno',
        horario: '19:30',
      },
    ],
  },
];
