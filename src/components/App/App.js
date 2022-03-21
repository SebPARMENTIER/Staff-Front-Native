import { StyleSheet, View, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';

import store from '../../store';

import home from '../../../assets/home.png';
import cards from '../../../assets/cards.png';

import Home from '../../containers/Home';
import Cards from '../Cards/Cards';
import Card from '../Card/Card';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff1616',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShadowVisible: false
      }}
    >
      <Stack.Screen name="Accueil" component={Home} />
    </Stack.Navigator>
  );
};

const CardsStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff1616',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShadowVisible: false
      }}
    >
      <Stack.Screen name="Cartes" component={Cards} />
      <Stack.Screen name='Carte' component={Card} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar hidden />
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerShown: false,
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: '#ff1616',
                borderTopColor: '#ff5757',
                borderTopWidth: 5
              },
              tabBarActiveTintColor: '#f0ff0f',
              tabBarInactiveBackgroundColor: '#ff5757'
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{
                tabBarIcon: () => (
                  <Image source={home} style={{ width: 30, height: 30 }} />
                )
              }}
            />
            <Tab.Screen
              name="Cards"
              component={CardsStackScreen}
              options={{
                tabBarIcon: () => (
                  <Image source={cards} style={{ width: 30, height: 30 }} />
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        {/* <Footer /> */}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e4bef'
  },
});

export default App;