import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Cards from '../Cards/Cards';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerStyle: {
              borderBottomColor: 'none',
              borderBottomWidth: 0,
              maxHeight: 30,
            },
            headerTitleStyle: {
              fontSize: 15
            },
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTintColor: 'white'
          }}
          >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='Cards' component={Cards} />
          <Stack.Screen name='Card' component={Card} />
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e4bef'
  },
});

export default App;