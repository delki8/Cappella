import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ContainerPage} from '../../components/ContainerPage';
import {AgendaItem} from './agendaItem';
import {AGENDA} from './data/Agenda';
import {
  TITLE,
  FONT_FAMILY_SEMI_BOLD,
  SIZE_XX_LARGE,
  SIZE_SMALL,
  SIZE_LARGE,
} from '../../styles/styles';
import {IconAgenda} from '../../assets/images/Icons';
import {getSize} from '../../utils/utils';

export const Agenda = () => {
  const {width} = useWindowDimensions();
  const styles = getStyles(getSize(width));

  const renderItem = ({item}, index) => {
    return <AgendaItem key={index} {...item} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ContainerPage imagem={IconAgenda} titulo={'Agenda de Encontros'}>
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

const getStyles = (size) => {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    flatListContainer: {
      marginTop: size === 'small' ? SIZE_LARGE : SIZE_XX_LARGE,
      height: size === 'small' ? hp('65%') : hp('72%'),
    },
    dia: {
      color: TITLE,
      fontSize: 16,
      fontFamily: FONT_FAMILY_SEMI_BOLD,
      margin: SIZE_SMALL,
      alignSelf: 'center',
    },
  });
};
