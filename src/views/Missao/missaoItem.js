import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {FONT_AVENIR_ROMAN, SIZE_XX_SMALL} from '../../styles/styles';
import {getSize} from '../../utils/utils';

export const MissaoItem = ({nome, missao, contato, backgroundColor, color}) => {
  const {height} = useWindowDimensions();
  const size = getSize(height);
  const styles = getStyles(backgroundColor, color, size);

  return (
    <View style={styles.containerMissao}>
      <View style={styles.containerItem}>
        <Text style={styles.missao}>{nome}</Text>
        <Text style={styles.missao}>{missao}</Text>
        <Text style={styles.missao}>{contato}</Text>
      </View>
    </View>
  );
};

const getWidth = (size) => {
  switch (size) {
    case 'small':
    case 'medium':
    case 'large':
    case 'xlarge':
      return 284;
    case 'xxlarge':
      return 320;
    case 'xxxlarge':
      return 384;
    default:
      break;
  }
};

const getStyles = (backgroundColor, color, size) => {
  return StyleSheet.create({
    missao: {
      color,
      fontSize: wp('4.3%'),
      fontFamily: FONT_AVENIR_ROMAN,
      textAlign: 'center',
    },
    containerMissao: {
      width: getWidth(size),
      marginBottom: SIZE_XX_SMALL,
    },
    containerItem: {
      height: hp('8%'),
      backgroundColor,
      justifyContent: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
  });
};
