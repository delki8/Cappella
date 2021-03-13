import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_FAMILY_BOLD, BEIGE, SHADOW_BEIGE, TITLE} from '../styles/styles';

export const GenericItem = ({titulo, icon, width, height, onNavigate}) => {
  const styles = getStyles(width, height);

  return (
    <TouchableOpacity style={styles.containerItem} onPress={onNavigate}>
      {icon}
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (width, height) => {
  return StyleSheet.create({
    containerItem: {
      width,
      height,
      backgroundColor: BEIGE,
      borderRadius: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 1,
      elevation: 5,
      shadowColor: SHADOW_BEIGE,
    },
    imagem: {
      height: 84,
    },
    texto: {
      marginTop: 8,
      fontFamily: FONT_FAMILY_BOLD,
      fontSize: wp('3.5%'),
      color: TITLE,
    },
  });
};
