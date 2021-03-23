import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Alert, Image, Linking, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_AVENIR_BLACK} from '../../styles/styles';

const handlePress = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export const ComunidadeItem = ({url, text, backgroundColor, color, icon}) => {
  const styles = getStyles(backgroundColor, color);

  return (
    <View style={styles.container}>
      <View style={styles.redesContainer}>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={() => handlePress(url)}>
          {typeof icon === 'number' ? (
            <Image
              source={require('../../assets/images/mosaicoLogo.png')}
              style={styles.iconeRede}
            />
          ) : (
            <FontAwesomeIcon icon={icon} color={color} size={wp('11%')} />
          )}
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.redes}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const getStyles = (backgroundColor, color) => {
  return StyleSheet.create({
    container: {
      width: wp('74%'),
      height: hp('7.5%'),
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: hp('1.7%'),
      backgroundColor,
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 1,
      borderRadius: 50,
    },
    redesContainer: {
      width: wp('66%'),
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    textContainer: {
      width: wp('54%'),
      alignItems: 'center',
    },
    redes: {
      color,
      fontSize: hp('2.3%'),
      fontFamily: FONT_AVENIR_BLACK,
    },
    iconeContainer: {
      width: wp('12%'),
      alignItems: 'center',
    },
    iconeRede: {
      width: wp('12%'),
      height: hp('5%'),
    },
  });
};
