import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  faHandHoldingHeart,
  faHome,
  faCalendar,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {LandingPage} from './src/views/LandingPage';
import {DetalhesItem} from './src/views/DetalhesItem';
import {Pastoral} from './src/views/Pastoral';
import {Contato} from './src/views/Contato';
import {Agenda} from './src/views/Agenda';

import {COR_DE_FUNDO, ACTIVE_GREEN, INACTIVE_GRAY} from './src/styles/styles';
import {Doacao} from './src/views/Doacao';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeStack.Navigator initialRouteName="Landpage">
        <HomeStack.Screen
          name="Landpage"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="DetalhesItem"
          component={DetalhesItem}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="Pastoral"
          component={Pastoral}
          options={{headerShown: false}}
        />
      </HomeStack.Navigator>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            switch (route.name) {
              case 'Home':
                return (
                  <FontAwesomeIcon icon={faHome} size={size} color={color} />
                );
              case 'Doacao':
                return (
                  <FontAwesomeIcon
                    icon={faHandHoldingHeart}
                    size={size}
                    color={color}
                  />
                );
              case 'Agenda':
                return (
                  <FontAwesomeIcon
                    icon={faCalendar}
                    size={size}
                    color={color}
                  />
                );
              case 'Contato':
                return (
                  <FontAwesomeIcon icon={faIdCard} size={size} color={color} />
                );
              default:
                break;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: ACTIVE_GREEN,
          inactiveTintColor: INACTIVE_GRAY,
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Doacao" component={Doacao} />
        <Tab.Screen name="Agenda" component={Agenda} />
        <Tab.Screen name="Contato" component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
  },
});
