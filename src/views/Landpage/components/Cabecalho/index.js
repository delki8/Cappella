import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  FONT_FAMILY_BOLD,
  SIZE_MEDIUM,
  SIZE_XX_LARGE,
} from '../../../../styles/styles';

const Cabecalho = () => {
  return (
    <View style={styles.containerTitle}>
      <Text style={styles.title}>Cappella</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZE_MEDIUM,
    paddingHorizontal: 6,
  },
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: SIZE_XX_LARGE,
  },
});

export default Cabecalho;
