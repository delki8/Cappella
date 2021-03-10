import React from 'react';
import {Alert, Linking, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  FONT_FAMILY_BOLD,
  SIZE_XXX_LARGE,
  TITLE,
  DARKORANGE,
} from '../../styles/styles';

const handlePress = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export const ComunidadeItem = ({url, text}) => {
  return (
    <TouchableOpacity
      style={styles.containerComunidade}
      onPress={() => handlePress(url)}>
      <Text style={styles.redes}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerComunidade: {
    width: 177,
    height: 76,
    margin: SIZE_XXX_LARGE,
    borderWidth: 3,
    borderColor: DARKORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  redes: {
    color: TITLE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_BOLD,
    textAlign: 'center',
  },
});
