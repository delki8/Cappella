import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {BEIGE, FONT_AVENIR_ROMAN, IRON} from '../../styles/styles';
import {getSize} from '../../utils/utils';
import {MissaoItem} from './missaoItem';
import {MissaoCollection} from '../../../imports/api/missao';
import {handleIsConnected} from '../../utils/handleIsConnected';
import {ContainerServer} from '../../components/ContainerServer';
import {FALLBACK} from './data/Missao';

interface Missao {
  nome: string;
  missao: string;
  contato: string;
}
interface Props {
  titulo: string;
}

export const Missao = ({titulo}: Props) => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));
  const [isConnected, setIsConnected] = useState(false);

  handleIsConnected().then((value) => {
    setIsConnected(Boolean(value));
  });

  const missaoList = (MISSAO: Missao[]) => {
    return (
      <FlatList
        style={styles.flatList}
        numColumns={1}
        data={MISSAO}
        renderItem={({item}) => (
          <MissaoItem
            nome={item.nome}
            missao={item.missao}
            contato={item.contato}
          />
        )}
        keyExtractor={(item) => item.nome}
      />
    );
  };

  return (
    <ContainerPage titulo={titulo}>
      <View style={styles.containerPagina}>
        {isConnected ? (
          <ContainerServer collection={MissaoCollection}>
            {(MISSAO: Missao[]) => missaoList(MISSAO)}
          </ContainerServer>
        ) : (
          missaoList(FALLBACK)
        )}
      </View>
    </ContainerPage>
  );
};

const getHeight = (size: string) => {
  switch (size) {
    case 'small':
    case 'medium':
      return hp('60%');
    case 'large':
    case 'xlarge':
    case 'xxlarge':
    case 'xxxlarge':
      return hp('68%');
    default:
      break;
  }
};

const getStyles = (size: string) => {
  return StyleSheet.create({
    containerPagina: {
      alignItems: 'center',
    },
    flatList: {
      marginTop: hp('2%'),
      height: getHeight(size),
    },
    containerConselho: {
      width: wp('100%'),
      height: hp('7%'),
      backgroundColor: BEIGE,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
    contribua: {
      color: IRON,
      fontSize: wp('3.4%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
    },
    conselho: {
      width: wp('90%'),
      color: IRON,
      fontSize: wp('3.4%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
      lineHeight: hp('2%'),
    },
  });
};
