import React from 'react';
import {Platform, SafeAreaView, StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ContainerPage} from '../../components/ContainerPage';
import {AgendaItem} from './agendaItem';
import {AGENDA} from './data/Agenda';
import {FONT_AVENIR_BLACK, BLUE} from '../../styles/styles';
import {IconAgenda} from '../../assets/images/Icons';

export const Agenda = () => {
  const styles = getStyles();

  const renderItem = ({item}, index) => {
    return <AgendaItem key={index} {...item} />;
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ContainerPage imagem={IconAgenda} titulo={'AGENDA'}>
        <FlatList
          numColumns={1}
          data={AGENDA}
          style={styles.flatListContainer}
          renderItem={({item}) => {
            return (
              <FlatList
                numColumns={1}
                data={item.atividades}
                renderItem={renderItem}
                ListHeaderComponent={<Text style={styles.dia}>{item.dia}</Text>}
                keyExtractor={(dia) => dia.atividade}
              />
            );
          }}
          keyExtractor={(item) => item.dia}
        />
      </ContainerPage>
    </SafeAreaView>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    flatListContainer: {
      paddingVertical: hp('7%'),
    },
    dia: {
      color: BLUE,
      fontSize: wp('4.8%'),
      fontFamily: FONT_AVENIR_BLACK,
      margin: hp('1%'),
      alignSelf: 'flex-end',
    },
  });
};
