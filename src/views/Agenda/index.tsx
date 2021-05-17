import React, {useState} from 'react';
import {SafeAreaView, SectionList, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {AgendaItem} from './agendaItem';
import {FONT_AVENIR_BLACK, BLUE} from '../../styles/styles';
import {FALLBACK} from './data/Agenda';
import {ContainerPage} from '../../components/ContainerPage';
import {AgendasCollection} from '../../../imports/api/agendas';
import {ContainerServer} from '../../components/ContainerServer';
import {handleIsConnected} from '../../utils/handleIsConnected';
import {Aguarde} from '../../components/Aguarde';

interface data {
  atividade: string;
  horario: string;
}
interface Agenda {
  dia: string;
  data: data[];
}

export const Agenda = () => {
  const [isConnected, setIsConnected] = useState(false);

  handleIsConnected().then((value) => {
    setIsConnected(Boolean(value));
  });

  const agendaList = (sections: Agenda[]) => (
    <SectionList
      style={styles.containerList}
      sections={sections}
      keyExtractor={(item, index) => `${item}${index}`}
      renderItem={({item}) => <AgendaItem {...item} />}
      renderSectionHeader={({section: {dia, data}}) => {
        return data.length ? <Text style={styles.dia}>{dia}</Text> : <></>;
      }}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ContainerPage titulo={'AGENDA'}>
        <View style={styles.container}>
          {isConnected ? (
            <ContainerServer collection={AgendasCollection}>
              {(AGENDA: Agenda[]) =>
                AGENDA ? agendaList(AGENDA) : <Aguarde />
              }
            </ContainerServer>
          ) : (
            agendaList(FALLBACK)
          )}
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
