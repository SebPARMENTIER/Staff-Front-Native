import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import store from '../../store';

import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Cards from '../Cards/Cards';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerBackVisible: false,
              headerTransparent: true,
            }}
            >
            <Stack.Screen name="Home" component={Home} options={{ header: () => <Header /> }}/>
            <Stack.Screen name='Cards' component={Cards} />
            <Stack.Screen name='Card' component={Card} />
          </Stack.Navigator>
        </NavigationContainer>
        <Footer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e4bef'
  },
});

export default App;