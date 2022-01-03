import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {MosaicoOnlineItem} from './mosaicoOnlineItem';
import {ComunidadesCollection} from '../../../imports/api/comunidades';
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {ContainerServer} from '../../components/ContainerServer';
import {FALLBACK} from './data/Comunidade';
import {Aguarde} from '../../components/Aguarde';

interface Comunidade {
  facebook: string;
  instagram: string;
  whatsapp: string;
  youtube: string;
  spotify: string;
  site: string;
}

interface Props {
  isConnected: boolean;
}

export const MosaicoOnline = ({isConnected}: Props) => {
  const styles = getStyles();

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
            icon: require('../../assets/images/mosaicoLogo.png'),
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
        numColumns={Math.ceil(mappedRedes.length / 2)}
        data={mappedRedes}
        renderItem={({item}) =>
          item ? <MosaicoOnlineItem url={item.url} icon={item.icon} /> : <></>
        }
        keyExtractor={(item) => (item && item.url ? item.url : 'item')}
      />
    );
  };

  return (
    <>
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

            return collection ? comunidadeList(COMUNIDADE) : <Aguarde />;
          }}
        </ContainerServer>
      ) : (
        comunidadeList(FALLBACK)
      )}
    </>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    flatList: {
      alignContent: 'center',
      alignSelf: 'center',
    },
  });
};
