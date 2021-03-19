import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Alert,
  Image,
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
import {FONT_AVENIR_BLACK} from '../../styles/styles';
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
        {typeof icon === 'number' ? (
          <Image
            source={require('../../assets/images/mosaicoLogo.png')}
            style={styles.imagemSeta}
          />
        ) : (
          <FontAwesomeIcon icon={icon} color={color} size={wp('15%')} />
        )}

        <View style={styles.redesContainer}>
          <Text style={styles.redes}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (backgroundColor, color, size) => {
  return StyleSheet.create({
    container: {
      height: hp('11%'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerComunidade: {
      flexDirection: 'row',
      width: wp('90%'),
      height: hp('9%'),
      backgroundColor,
      justifyContent: 'space-around',
      alignItems: 'center',
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 1,
      borderRadius: 50,
    },
    redesContainer: {
      width: wp('50%'),
    },
    redes: {
      color,
      fontSize: hp('2.3%'),
      fontFamily: FONT_AVENIR_BLACK,
    },
    imagemSeta: {
      width: wp('18%'),
      height: hp('8%'),
    },
  });
};
