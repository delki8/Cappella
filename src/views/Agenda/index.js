import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {ContainerPage} from '../../components/ContainerPage';
import {AgendaItem} from './agendaItem';
import {AGENDA} from './data/Agenda';
import {
  FONT_FAMILY_BOLD,
  TITLE,
  FONT_FAMILY_SEMI_BOLD,
  SIZE_LARGE,
  SIZE_X_LARGE,
  SIZE_XX_LARGE,
  SIZE_SMALL,
} from '../../styles/styles';
import {IconAgenda} from '../../assets/images/Icons';

export const Agenda = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ContainerPage imagem={IconAgenda} titulo={'Agenda de Encontros'}>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.flatListContainer}>
            {AGENDA.map((agenda) => (
              <>
                <Text style={styles.dia}>{agenda.dia}</Text>
                <FlatList
                  numColumns={1}
                  data={agenda.atividades}
                  renderItem={({item}) => <AgendaItem {...item} />}
                  keyExtractor={(item) => item.nome}
                />
              </>
            ))}
          </View>
        </ScrollView>
      </ContainerPage>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContainer: {
    marginLeft: SIZE_X_LARGE,
    marginRight: SIZE_LARGE,
  },
  flatListContainer: {
    marginTop: SIZE_XX_LARGE,
  },
  dia: {
    color: TITLE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    marginBottom: SIZE_SMALL,
  },
});
