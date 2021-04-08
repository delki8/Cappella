import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  COLORCOMUNIDADE,
  FONT_AVENIR_BLACK,
  SHADOW_BEIGE,
  TITLE,
} from '../../styles/styles';
import {handlePress} from '../../utils/handlePress';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface Props {
  url: string;
  icon: IconProp;
}

export const ComunidadeItem = ({url, icon}: Props) => {
  const styles = getStyles();

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() => handlePress(url)}>
      {typeof icon === 'number' ? (
        <Image
          source={require('../../assets/images/mosaicoLogo.png')}
          style={styles.iconeRede}
        />
      ) : (
        <FontAwesomeIcon
          icon={icon}
          color={COLORCOMUNIDADE}
          size={wp('14.5%')}
        />
      )}
    </TouchableOpacity>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    containerItem: {
      width: wp('34.5%'),
      height: hp('18%'),
      backgroundColor: TITLE,
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
    iconeRede: {
      width: wp('14%'),
      height: hp('6.5%'),
    },
  });
};
