import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Pastoral = ({route}) => {
  const {itemDesc} = route.params;

  return (
    <View>
      <Text style={styles.container}>Pastoral</Text>
      <Text>{itemDesc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: 300,
  },
});
