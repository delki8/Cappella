import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ContainerPage} from '../../components/ContainerPage';
import {MISSAO} from './data/Missao';
import {MissaoItem} from './missaoItem';

export const Missao = ({imagem}) => {
  return (
    <ContainerPage imagem={imagem}>
      <View style={styles.container}>
        <FlatList
          numColumns={1}
          data={MISSAO}
          renderItem={({item}) => <MissaoItem {...item} />}
          keyExtractor={(item) => item.nome}
        />
      </View>
    </ContainerPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    height: 84,
  },
});
