import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Cards from '../Cards/Cards';
import Card from './Card/Card';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Header'>
        <Stack.Screen name='Header' component={Header} />
        <Stack.Screen name="Home" component={Home} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='Cards' component={Cards} />
        <Stack.Screen name='Card' component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e4bef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;