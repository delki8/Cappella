import React from 'react';
import {SafeAreaView, SectionList, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {AgendaItem} from './agendaItem';
import {AGENDA} from './data/Agenda';
import {FONT_AVENIR_BLACK, BLUE} from '../../styles/styles';
import {ContainerPage} from '../../components/ContainerPage';

export const Agenda = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ContainerPage titulo={'AGENDA'}>
        <View style={styles.container}>
          <SectionList
            style={styles.containerList}
            sections={AGENDA}
            keyExtractor={(item, index) => `${item}${index}`}
            renderItem={({item}) => <AgendaItem {...item} />}
            renderSectionHeader={({section: {dia}}) => {
              return (
                <Text allowFontScaling={false} style={styles.dia}>
                  {dia}
                </Text>
              );
            }}
          />
        </View>
      </ContainerPage>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
  },
  containerList: {
    marginTop: hp('5%'),
  },
  dia: {
    color: BLUE,
    fontSize: wp('4.8%'),
    fontFamily: FONT_AVENIR_BLACK,
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
    marginRight: wp('3%'),
    alignSelf: 'flex-end',
  },
});
