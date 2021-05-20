import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BOLD, REGULAR, DARKBEIGE, BLUE, BEIGE} from '../../styles/styles';
import {getSize} from '../../utils/utils';

interface Props {
  atividade: string;
  horario: string;
}

export const AgendaItem = ({atividade, horario}: Props) => {
  const {height} = useWindowDimensions();
  const size = getSize(height);
  const styles = getStyles(size);

  return (
    <View style={styles.container}>
      <View style={styles.containerHorario}>
        <Text allowFontScaling={false} style={styles.horario}>
          {horario}
        </Text>
      </View>
      <View style={styles.containerAtividade}>
        <Text style={styles.atividade}>{atividade}</Text>
      </View>
    </View>
  );
};

const getHeight = (size: string) => {
  switch (size) {
    case 'small':
    case 'medium':
      return hp('7%');
    case 'large':
    case 'xlarge':
    case 'xxlarge':
    case 'xxxlarge':
      return hp('8.5%');
    default:
      break;
  }
};

const getStyles = (size: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: wp('80%'),
      alignSelf: 'center',
    },
    containerAtividade: {
      justifyContent: 'center',
      width: wp('53%'),
      height: getHeight(size),
      marginBottom: hp('1.2%'),
      backgroundColor: DARKBEIGE,
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 1,
    },
    containerHorario: {
      alignItems: 'center',
      justifyContent: 'center',
      width: wp('19%'),
      marginBottom: hp('1.2%'),
      backgroundColor: BEIGE,
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 1,
    },
    horario: {
      color: BLUE,
      fontSize: wp('6.3%'),
      fontFamily: BOLD,
    },
    atividade: {
      color: BLUE,
      fontSize: wp('4.7%'),
      textAlign: 'center',
      fontFamily: REGULAR,
    },
  });
};
