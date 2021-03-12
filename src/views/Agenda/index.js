import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ContainerPage} from '../../components/ContainerPage';
import {AgendaItem} from './agendaItem';
import {AGENDA} from './data/Agenda';
import {
  TITLE,
  FONT_FAMILY_SEMI_BOLD,
  SIZE_LARGE,
  SIZE_X_LARGE,
  SIZE_XX_LARGE,
  SIZE_SMALL,
} from '../../styles/styles';
import {IconAgenda} from '../../assets/images/Icons';

export const Agenda = () => {
  const renderItem = ({item}, index) => {
    return <AgendaItem key={index} {...item} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ContainerPage imagem={IconAgenda} titulo={'Agenda de Encontros'}>
        <View style={styles.container}>
          <FlatList
            numColumns={1}
            data={AGENDA}
            style={styles.flatListContainer}
            renderItem={({item}) => {
              return (
                <FlatList
                  style={styles.scrollViewContainer}
                  numColumns={1}
                  data={item.atividades}
                  renderItem={renderItem}
                  ListHeaderComponent={
                    <Text style={styles.dia}>{item.dia}</Text>
                  }
                  keyExtractor={(dia) => dia.atividade}
                />
              );
            }}
            keyExtractor={(item) => item.dia}
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
    height: hp('75%'),
  },
  scrollViewContainer: {
    marginLeft: SIZE_X_LARGE,
    marginRight: SIZE_LARGE,
  },
  flatListContainer: {
    marginTop: SIZE_XX_LARGE,
    height: 650,
  },
  dia: {
    color: TITLE,
    fontSize: 16,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    marginBottom: SIZE_SMALL,
  },
});
