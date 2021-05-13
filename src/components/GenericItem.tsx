import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {
  SHADOW_BEIGE,
  SUBTEXT,
  FONT_AVENIR_BLACK,
  WHITE,
} from '../styles/styles';

interface Props {
  textoCard: string;
  icon: JSX.Element;
  width: number;
  height: number;
  onNavigate: (event: GestureResponderEvent) => void;
}

export const GenericItem = ({
  textoCard,
  icon,
  width,
  height,
  onNavigate,
}: Props) => {
  const styles = getStyles(width, height);

  return (
    <TouchableOpacity style={styles.containerItem} onPress={onNavigate}>
      {icon}
      <Text allowFontScaling={false} style={styles.texto}>
        {textoCard}
      </Text>
    </TouchableOpacity>
  );
};

const getStyles = (width: number, height: number) => {
  return StyleSheet.create({
    containerItem: {
      width,
      height,
      backgroundColor: WHITE,
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
      color: SUBTEXT,
    },
  });
};
