import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {GenericItem} from '../../../../components/GenericItem.js';
import {Image, StyleSheet} from 'react-native';

export const PastoralItem = () => {
  const navigation = useNavigation();
  const titulo = 'Uma Palavra Pastoral';

  return (
    <GenericItem
      titulo={titulo}
      icon={
        <Image
          source={require('../../../../assets/images/pastoral.png')}
          style={styles.imagem}
          resizeMode="contain"
        />
      }
      width={284}
      height={347}
      onNavigate={() =>
        navigation.push('Pastoral', {
          titulo,
        })
      }
    />
  );
};

const styles = StyleSheet.create({
  imagem: {
    width: 363,
    height: 204,
  },
});
