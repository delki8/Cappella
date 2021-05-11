import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {useTracker} = require('@socialize/react-native-meteor');
import {PastoralCollection} from '../../../imports/api/pastoral';

import {ContainerPage} from '../../components/ContainerPage';
import {
  FONT_AVENIR_ROMAN,
  FONT_AVENIR_BOOK,
  FONT_AVENIR_BLACK,
  IRON,
  SUBTEXT,
} from '../../styles/styles';
import {getSize} from '../../utils/utils';
import {FALLBACK} from './data/Pastoral';

interface Pastoral {
  titulo: string;
  autor: string;
  descricao: string;
}

type ReactElement = JSX.Element | JSX.Element[];
interface PastoralServerProps {
  children: (PASTORAL: Pastoral) => ReactElement;
}

const PastoralServer = ({children}: PastoralServerProps) => {
  const PASTORAL = useTracker(() => PastoralCollection.find().fetch())[0];

  return <>{children(PASTORAL)}</>;
};

export const Pastoral = () => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));
  const [isConnected, setIsConnected] = useState(false);

  const isConnectedFunc = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        return value === 'connected';
      }
    } catch (e) {
      console.log(e);
    }
  };

  isConnectedFunc().then((value) => {
    setIsConnected(Boolean(value));
  });

  return (
    <ContainerPage>
      <View style={styles.containerPagina}>
        <ScrollView style={styles.container}>
          {isConnected ? (
            <PastoralServer>
              {(PASTORAL: Pastoral) => (
                <>
                  <Text style={styles.titulo}>
                    {PASTORAL.titulo.toUpperCase()}
                  </Text>
                  <Text style={styles.autor}>{PASTORAL.autor}</Text>
                  <Text style={styles.descricao}>{PASTORAL.descricao}</Text>
                </>
              )}
            </PastoralServer>
          ) : (
            <>
              <Text style={styles.titulo}>{FALLBACK.titulo.toUpperCase()}</Text>
              <Text style={styles.autor}>{FALLBACK.autor}</Text>
              <Text style={styles.descricao}>{FALLBACK.descricao}</Text>
            </>
          )}
        </ScrollView>
      </View>
    </ContainerPage>
  );
};

const getHeight = (size: string) => {
  switch (size) {
    case 'small':
    case 'medium':
      return hp('69%');
    case 'large':
    case 'xlarge':
    case 'xxlarge':
    case 'xxxlarge':
      return hp('75%');
    default:
      break;
  }
};

const getStyles = (size: string) => {
  return StyleSheet.create({
    containerPagina: {
      alignItems: 'center',
    },
    container: {
      marginTop: hp('5%'),
      width: wp('90%'),
      height: getHeight(size),
    },
    titulo: {
      fontSize: wp('6%'),
      fontFamily: FONT_AVENIR_BLACK,
      alignSelf: 'center',
      textAlign: 'center',
      color: IRON,
    },
    autor: {
      fontSize: wp('3%'),
      fontFamily: FONT_AVENIR_BOOK,
      alignSelf: 'flex-end',
      color: SUBTEXT,
      lineHeight: wp('6.3%'),
    },
    descricao: {
      fontSize: wp('4.4%'),
      fontFamily: FONT_AVENIR_ROMAN,
      color: IRON,
      lineHeight: wp('6.3%'),
      textAlign: 'justify',
      marginTop: hp('2%'),
    },
  });
};
