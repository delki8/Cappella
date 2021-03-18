import React from 'react';
import {
  Platform,
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
  FONT_AVENIR_ROMAN,
  SIZE_SMALL,
  SIZE_LARGE,
} from '../../styles/styles';
import {IconAgenda} from '../../assets/images/Icons';
import {getSize} from '../../utils/utils';

export const Agenda = () => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));

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

const getHeight = (size) => {
  switch (size) {
    case 'small':
      return hp('65%');
    case 'medium':
      return hp('68%');
    case 'large':
    case 'xlarge':
    case 'xxlarge':
      return hp('75%');
    case 'xxxlarge':
      return hp('100%');
    default:
      break;
  }
};

const getStyles = (size) => {
  return StyleSheet.create({
    droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    flatListContainer: {
      marginTop: SIZE_LARGE,
      height: getHeight(size),
    },
    dia: {
      color: TITLE,
      fontSize: 16,
      fontFamily: FONT_AVENIR_ROMAN,
      margin: SIZE_SMALL,
      alignSelf: 'center',
    },
  });
};
