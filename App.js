import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingPage from './src/views/LandingPage';
import {DetalhesItem} from './src/views/DetalhesItem';
import {Pastoral} from './src/views/Pastoral';
import {COR_DE_FUNDO, ACTIVE_GREEN, INACTIVE_GRAY} from './src/styles/styles';
import {
  faHandHoldingHeart,
  faHome,
  faCalendar,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function SettingsStackScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>Settings Screen</Text>
    </View>
  );
}

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
          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              case 'Home':
                return <FontAwesomeIcon icon={faHome} />;
              case 'Doacao':
                return <FontAwesomeIcon icon={faHandHoldingHeart} />;
              case 'Agenda':
                return <FontAwesomeIcon icon={faCalendar} />;
              case 'Contato':
                return <FontAwesomeIcon icon={faIdCard} />;
              default:
                break;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: ACTIVE_GREEN,
          inactiveTintColor: INACTIVE_GRAY,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Doacao" component={SettingsStackScreen} />
        <Tab.Screen name="Agenda" component={SettingsStackScreen} />
        <Tab.Screen name="Contato" component={SettingsStackScreen} />
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
