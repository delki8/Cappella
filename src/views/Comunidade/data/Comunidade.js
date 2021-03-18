import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  BLUE,
  IRON,
  LIGHTBLUE,
  LIGHTTITLE,
  TITLE,
  OTHERWHITE,
} from '../../../styles/styles';

export const COMUNIDADE = [
  {
    media: 'facebook',
    url: 'https://www.facebook.com/igrejapresbiterianamosaico',
    text: 'FACEBOOK',
    backgroundColor: LIGHTBLUE,
    color: IRON,
    icon: faFacebook,
  },
  {
    media: 'instagram',
    url: 'https://www.instagram.com/igrejapresbiterianamosaico/',
    text: 'INSTAGRAM',
    backgroundColor: '#A5D5DC',
    color: IRON,
    icon: faInstagram,
  },
  {
    media: 'whatsapp',
    url: 'https://chat.whatsapp.com/0Yrrxb86FMk1bmN5YttA1N',
    text: 'WHATSAPP',
    backgroundColor: LIGHTTITLE,
    color: IRON,
    icon: faWhatsapp,
  },
  {
    media: 'youtube',
    url:
      'https://www.youtube.com/channel/UCsYR03W9u4pIOcR4xpXfHqg?sub_confirmation=1',
    text: 'YOUTUBE',
    backgroundColor: BLUE,
    color: OTHERWHITE,
    icon: faYoutube,
  },
  {
    media: 'spotify',
    url:
      'https://open.spotify.com/show/25Ew0LHUkCnAu3nbcXawdw?si=0pxQ6kg9S0K-aYAUmff4yQ',
    text: 'SPOTIFY',
    backgroundColor: TITLE,
    color: OTHERWHITE,
    icon: faSpotify,
  },
];
