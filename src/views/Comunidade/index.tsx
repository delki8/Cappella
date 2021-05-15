import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
import {handleIsConnected} from '../../utils/handleIsConnected';
import {ContainerServer} from '../../components/ContainerServer';
import {FALLBACK} from './data/Comunidade';

interface Comunidade {
  facebook: string;
  instagram: string;
  whatsapp: string;
  youtube: string;
  spotify: string;
  site: string;
}

export const Comunidade = () => {
  const styles = getStyles();
  const [isConnected, setIsConnected] = useState(false);

  handleIsConnected().then((value) => {
    setIsConnected(Boolean(value));
  });

  const getMappedRedes = (collection: Comunidade) => {
    const redes = Object.keys(collection);

    return redes.map((item) => {
      switch (item) {
        case 'facebook':
          return {
            url: collection[item],
            icon: faFacebook,
          };
        case 'instagram':
          return {
            url: collection[item],
            icon: faInstagram,
          };
        case 'whatsapp':
          return {
            url: collection[item],
            icon: faWhatsapp,
          };
        case 'youtube':
          return {
            url: collection[item],
            icon: faYoutube,
          };
        case 'spotify':
          return {
            url: collection[item],
            icon: faSpotify,
          };
        case 'site':
          return {
            url: collection[item],
            icon: require('../../assets/images/central.png'),
          };
        default:
          break;
      }
    });
  };

  const comunidadeList = (collection: Comunidade) => {
    const mappedRedes = getMappedRedes(collection);

    return (
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={mappedRedes}
        renderItem={({item}) =>
          item ? <ComunidadeItem url={item.url} icon={item.icon} /> : <></>
        }
        keyExtractor={(item) => (item && item.url ? item.url : 'item')}
      />
    );
  };

  return (
    <ContainerPage titulo={'COMUNIDADE'}>
      {isConnected ? (
        <ContainerServer collection={ComunidadesCollection}>
          {(collection: Comunidade[]) => {
            const COMUNIDADE = collection.map((com) => {
              return {
                facebook: com.facebook,
                instagram: com.instagram,
                whatsapp: com.whatsapp,
                youtube: com.youtube,
                spotify: com.spotify,
                site: com.site,
              };
            })[0];

            return comunidadeList(COMUNIDADE);
          }}
        </ContainerServer>
      ) : (
        comunidadeList(FALLBACK)
      )}
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
