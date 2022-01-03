import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORCOMUNIDADE, SHADOW_BEIGE, TITLE} from '../../styles/styles';
import {handlePress} from '../../utils/handlePress';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface Props {
  url: string;
  icon: IconProp;
}

export const MosaicoOnlineItem = ({url, icon}: Props) => {
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
        <FontAwesomeIcon icon={icon} color={COLORCOMUNIDADE} size={35} />
      )}
    </TouchableOpacity>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    containerItem: {
      width: wp('20%'),
      height: hp('9%'),
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
    iconeRede: {
      width: wp('10%'),
      height: hp('4%'),
    },
  });
};
