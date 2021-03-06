import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const DescricaoItem = ({titulo}) => {
  return (
    <View>
      <Text style={styles.container}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: 300,
  },
});
