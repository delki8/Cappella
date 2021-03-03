import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Item} from './components/Item';
import Cabecalho from './components/Cabecalho';
import {SIZE_X_LARGE} from '../../styles/styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titulo: 'Ao vivo',
    imagem: `
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66">
      <g id="Grupo_160" data-name="Grupo 160" transform="translate(1.46 0.082)">
        <text id="G" transform="translate(32.54 51.918)" fill="#df8c5b" font-size="65" font-family="Liturgica-Medium, Liturgica" font-weight="500"><tspan x="-33.182" y="0">G</tspan></text>
      </g>
    </svg>`,
    itemDesc:
      'Contrary to popular belief, Lorem Ipsum is not simply random text',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: 'Doação',
    imagem: `
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66">
      <g id="Grupo_160" data-name="Grupo 160" transform="translate(1.46 0.082)">
        <text id="G" transform="translate(32.54 51.918)" fill="#df8c5b" font-size="65" font-family="Liturgica-Medium, Liturgica" font-weight="500"><tspan x="-33.182" y="0">G</tspan></text>
      </g>
    </svg>`,
    itemDesc:
      'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, lorem ipsum',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titulo: 'Comunidade',
    imagem: `
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66">
      <g id="Grupo_160" data-name="Grupo 160" transform="translate(1.46 0.082)">
        <text id="G" transform="translate(32.54 51.918)" fill="#df8c5b" font-size="65" font-family="Liturgica-Medium, Liturgica" font-weight="500"><tspan x="-33.182" y="0">G</tspan></text>
      </g>
    </svg>`,
    itemDesc:
      'There are many variations of passages of Lorem Ipsum available, but the majority',
  },
  {
    id: 'bd7acbea-c1b1-462c2-aed5-3ad53abb28ba',
    titulo: 'Igreja em Missão',
    imagem: `
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66">
      <g id="Grupo_160" data-name="Grupo 160" transform="translate(1.46 0.082)">
        <text id="G" transform="translate(32.54 51.918)" fill="#df8c5b" font-size="65" font-family="Liturgica-Medium, Liturgica" font-weight="500"><tspan x="-33.182" y="0">G</tspan></text>
      </g>
    </svg>`,
    itemDesc:
      'Cicero, written in 45 BC. This book is a treatise on the theory of ethics,',
  },
];

const Landpage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Cabecalho />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZE_X_LARGE,
  },
});

export default Landpage;
