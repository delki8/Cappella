import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BEIGE, SHADOW_BEIGE, TITLE, FONT_AVENIR_BLACK} from '../styles/styles';

export const GenericItem = ({textoCard, icon, width, height, onNavigate}) => {
  const styles = getStyles(width, height);

  return (
    <TouchableOpacity style={styles.containerItem} onPress={onNavigate}>
      {icon}
      <Text style={styles.texto}>{textoCard}</Text>
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
      fontFamily: FONT_AVENIR_BLACK,
      fontSize: wp('5%'),
      color: TITLE,
    },
  });
};
