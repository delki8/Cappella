import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {useTracker} = require('@socialize/react-native-meteor');

import {ContainerPage} from '../../components/ContainerPage';
import {ComunidadeItem} from './comunidadeItem';
import {ComunidadesCollection} from '../../../imports/api/comunidades';
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export const Comunidade = () => {
  const styles = getStyles();
  const COMUNIDADE = useTracker(() => ComunidadesCollection.find().fetch())[0];
  delete COMUNIDADE._id;
  delete COMUNIDADE._version;
  delete COMUNIDADE._createdAt;
  delete COMUNIDADE._updatedAt;
  const redes = Object.keys(COMUNIDADE);
  const mappedRedes = redes.map((item) => {
    switch (item) {
      case 'facebook':
        return {
          url: COMUNIDADE[item],
          icon: faFacebook,
        };
      case 'instagram':
        return {
          url: COMUNIDADE[item],
          icon: faInstagram,
        };
      case 'whatsapp':
        return {
          url: COMUNIDADE[item],
          icon: faWhatsapp,
        };
      case 'youtube':
        return {
          url: COMUNIDADE[item],
          icon: faYoutube,
        };
      case 'spotify':
        return {
          url: COMUNIDADE[item],
          icon: faSpotify,
        };
      case 'site':
        return {
          url: COMUNIDADE[item],
          icon: require('../../assets/images/mosaicoLogo.png'),
        };
      default:
        break;
    }
  });

  return (
    <ContainerPage titulo={'COMUNIDADE'}>
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={mappedRedes}
        renderItem={({item}) =>
          item ? <ComunidadeItem url={item.url} icon={item.icon} /> : <></>
        }
        keyExtractor={(item) => item && item.url}
      />
    </ContainerPage>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    flatList: {
      paddingVertical: hp('7%'),
      alignContent: 'center',
      alignSelf: 'center',
    },
  });
};
