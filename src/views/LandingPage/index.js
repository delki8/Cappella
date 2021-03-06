import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Item} from './components/Item';
import {PastoralItem} from './components/PastoralItem';
import {SIZE_X_LARGE} from '../../styles/styles';
import {
  IconAoVivo,
  IconDoacao,
  IconComunidade,
  IconMissao,
} from '../../assets/images/Icons';

const DATA = [
  {
    id: 'aoVivo',
    titulo: 'Ao vivo',
    imagem: IconAoVivo,
  },
  {
    id: 'doacao',
    titulo: 'Doação',
    imagem: IconDoacao,
  },
  {
    id: 'comunidade',
    titulo: 'Comunidade',
    imagem: IconComunidade,
  },
  {
    id: 'missao',
    titulo: 'Igreja em Missão',
    imagem: IconMissao,
  },
];

export const LandingPage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={[{}]}
        renderItem={() => <PastoralItem />}
        keyExtractor={() => 'pastoral'}
      />
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZE_X_LARGE,
  },
});
