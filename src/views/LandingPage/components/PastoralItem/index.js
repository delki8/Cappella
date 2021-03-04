import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  FONT_FAMILY_SEMI_BOLD,
  SIZE_SMALL,
  WHITE,
} from '../../../../styles/styles';
import {PastoralIcon} from '../../icons/PastoralIcon';

export const PastoralItem = () => {
  const navigation = useNavigation();
  const titulo = 'Uma Palavra Pastoral';

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() =>
        navigation.push('Pastoral', {
          titulo,
        })
      }>
      <PastoralIcon />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    width: 284,
    height: 347,
    backgroundColor: WHITE,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  imagem: {
    height: 84,
  },
  texto: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: SIZE_SMALL,
    color: '#848486',
  },
});
