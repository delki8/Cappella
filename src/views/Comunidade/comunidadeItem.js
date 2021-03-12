import React from 'react';
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_FAMILY_REGULAR} from '../../styles/styles';
import {getSize} from '../../utils/utils';

const handlePress = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export const ComunidadeItem = ({url, text, backgroundColor, color}) => {
  const {width} = useWindowDimensions();
  const size = getSize(width);
  const styles = getStyles(backgroundColor, color, size);

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

const getStyles = (backgroundColor, color, size) => {
  return StyleSheet.create({
    container: {
      width: wp('100%'),
      height: size === 'small' ? hp('16%') : hp('12%'),
      alignItems: 'center',
    },
    containerComunidade: {
      width: 283,
      height: 81,
      backgroundColor,
      justifyContent: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
    },
    redes: {
      color,
      fontSize: 14,
      fontFamily: FONT_FAMILY_REGULAR,
      textAlign: 'center',
    },
  });
};
