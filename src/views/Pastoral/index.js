import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SIZE_XXX_LARGE, SIZE_X_LARGE} from '../../styles/styles';

export const Pastoral = ({route}) => {
  const {itemDesc} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/flecha-esquerda.png')}
            style={styles.imagemSeta}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.textPastoral}>Pastoral</Text>
      <Text>{itemDesc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagemSeta: {
    width: SIZE_X_LARGE,
    height: SIZE_X_LARGE,
    marginTop: SIZE_XXX_LARGE,
    marginLeft: SIZE_X_LARGE,
  },
  textPastoral: {
    textAlign: 'center',
    marginTop: 300,
  },
});
