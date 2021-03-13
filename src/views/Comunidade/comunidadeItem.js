import React from 'react';
import {Alert, Linking, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_FAMILY_REGULAR} from '../../styles/styles';

const handlePress = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export const ComunidadeItem = ({url, text, backgroundColor, color}) => {
  const styles = getStyles(backgroundColor, color);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerComunidade}
        onPress={() => handlePress(url)}>
        <Text style={styles.redes}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (backgroundColor, color) => {
  return StyleSheet.create({
    container: {
      width: wp('100%'),
      height: hp('12%'),
      alignItems: 'center',
    },
    containerComunidade: {
      width: wp('90%'),
      height: hp('10%'),
      backgroundColor,
      justifyContent: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 1,
    },
    redes: {
      color,
      fontSize: 14,
      fontFamily: FONT_FAMILY_REGULAR,
      textAlign: 'center',
    },
  });
};
