import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Item} from './components/Item';
import {PastoralItem} from './components/PastoralItem';
import {SIZE_X_LARGE} from '../../styles/styles';

const DATA = [
  {
    id: 'aoVivo',
    titulo: 'Ao vivo',
    imagem: `
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66">
      <g id="Grupo_160" data-name="Grupo 160" transform="translate(1.46 0.082)">
        <text id="G" transform="translate(32.54 51.918)" fill="#df8c5b" font-size="65" font-family="Liturgica-Medium, Liturgica" font-weight="500"><tspan x="-33.182" y="0">G</tspan></text>
      </g>
    </svg>`,
  },
  {
    id: 'doacao',
    titulo: 'Doação',
    imagem: `
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="65" viewBox="0 0 68 65">
      <text id="H" transform="translate(34 52)" fill="#df8c5b" font-size="65" font-family="Liturgica-Medium, Liturgica" font-weight="500"><tspan x="-33.182" y="0">H</tspan></text>
    </svg>`,
  },
  {
    id: 'comunidade',
    titulo: 'Comunidade',
    imagem: `
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66">
      <text id="u" transform="translate(34 52)" fill="#df8c5b" font-size="65" font-family="Liturgica-Medium, Liturgica" font-weight="500"><tspan x="-33.052" y="0">u</tspan></text>
    </svg>`,
  },
  {
    id: 'missao',
    titulo: 'Igreja em Missão',
    imagem: `
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="65" viewBox="0 0 68 65">
      <text id="L" transform="translate(34 52)" fill="#df8c5b" font-size="65" font-family="Liturgica-Medium, Liturgica" font-weight="500"><tspan x="-33.377" y="0">L</tspan></text>
    </svg>`,
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
