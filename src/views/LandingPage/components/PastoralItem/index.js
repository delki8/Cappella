import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {GenericItem} from '../../../../components/GenericItem.js';
import {Image, StyleSheet} from 'react-native';

export const PastoralItem = () => {
  const navigation = useNavigation();
  const textoCard = 'Uma Palavra Pastoral';

  return (
    <GenericItem
      textoCard={textoCard}
      icon={
        <Image
          source={require('../../../../assets/images/pastoral.png')}
          style={styles.imagem}
          resizeMode="contain"
        />
      }
      width={wp('100%')}
      height={hp('40%')}
      onNavigate={() =>
        navigation.push('Pastoral', {
          textoCard,
        })
      }
    />
  );
};

const styles = StyleSheet.create({
  imagem: {
    width: wp('80%'),
    height: hp('30%'),
  },
});
