import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faBellSlash} from '@fortawesome/free-solid-svg-icons';

import {
  FONT_AVENIR_BLACK,
  IRON,
  ORANGEBUTTON,
  SIZE_X_LARGE,
  SIZE_XXX_LARGE,
  SIZE_LARGE,
} from '../styles/styles';

interface Props {
  titulo?: string;
  children: JSX.Element | JSX.Element[];
}

export const ContainerPage = ({titulo, children}: Props) => {
  const navigation = useNavigation();
  const [optIn, setOptIn] = useState(false);

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            color={ORANGEBUTTON}
            size={SIZE_LARGE}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOptIn(!optIn)}>
          <FontAwesomeIcon
            icon={optIn ? faBell : faBellSlash}
            color={optIn ? ORANGEBUTTON : IRON}
            size={SIZE_LARGE}
          />
        </TouchableOpacity>
      </View>
      {titulo && (
        <Text allowFontScaling={false} style={styles.titulo}>
          {titulo}
        </Text>
      )}
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: SIZE_X_LARGE,
    paddingRight: SIZE_X_LARGE,
  },
  titulo: {
    color: IRON,
    fontSize: wp('5%'),
    fontFamily: FONT_AVENIR_BLACK,
    alignSelf: 'center',
    marginTop: SIZE_XXX_LARGE,
  },
});
