import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet} from 'react-native';
import {COR_DE_FUNDO} from './src/styles/styles';
import Landpage from './src/views/LandingPage';
import {DetalhesItem} from './src/views/DetalhesItem';
import {Pastoral} from './src/views/Pastoral';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Landpage">
          <Stack.Screen
            name="Landpage"
            component={Landpage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetalhesItem"
            component={DetalhesItem}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Pastoral"
            component={Pastoral}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
  },
});

export default App;
