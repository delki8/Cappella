import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
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
import {FONT_FAMILY_BOLD} from '../../styles/styles';
import {getSize} from '../../utils/utils';

const handlePress = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export const ComunidadeItem = ({url, text, backgroundColor, color, icon}) => {
  const {height} = useWindowDimensions();
  const size = getSize(height);
  const styles = getStyles(backgroundColor, color, size);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerComunidade}
        onPress={() => handlePress(url)}>
        <FontAwesomeIcon icon={icon} color={color} size={hp('8%')} />
        <Text style={styles.redes}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const getHeight = (size) => {
  switch (size) {
    case 'small':
    case 'medium':
    case 'xxlarge':
    case 'xxxlarge':
      return hp('10%');
    case 'large':
    case 'xlarge':
      return hp('11%');
    default:
      break;
  }
};

const getStyles = (backgroundColor, color, size) => {
  return StyleSheet.create({
    container: {
      height: hp('12%'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerComunidade: {
      flexDirection: 'row',
      width: wp('90%'),
      height: getHeight(size),
      backgroundColor,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 1,
      borderRadius: 15,
    },
    redes: {
      color,
      fontSize: hp('3%'),
      fontFamily: FONT_FAMILY_BOLD,
    },
  });
};
