import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {MissaoItem} from './missaoItem';
import {MissaoCollection} from '../../../imports/api/missao';
import {ContainerServer} from '../../components/ContainerServer';
import {FALLBACK} from './data/Missao';
import {Aguarde} from '../../components/Aguarde';

interface Missao {
  nome: string;
  missao: string | undefined;
  contato: string | undefined;
}

interface Props {
  isConnected: boolean;
}

export const Missao = ({isConnected}: Props) => {
  const styles = getStyles();

  const missaoList = (MISSAO: Missao[]) => {
    return (
      <FlatList
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
    <View style={styles.containerPagina}>
      {isConnected ? (
        <ContainerServer collection={MissaoCollection}>
          {(MISSAO: Missao[]) => (MISSAO ? missaoList(MISSAO) : <Aguarde />)}
        </ContainerServer>
      ) : (
        missaoList(FALLBACK)
      )}
    </View>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    containerPagina: {
      alignItems: 'center',
      marginBottom: hp('3.5%'),
    },
  });
};
