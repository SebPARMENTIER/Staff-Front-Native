import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

const Home = ({
  navigation,
  email,
  password,
  changeField
}) => {
  return (
    <View style={styles.home}>
      <Text style={styles.home_text}>
      Bonjour, veuillez saisir vos identifiants pour vous connecter.
      </Text>
      <SafeAreaView>
        <TextInput
          autoFocus
          name="email"
          textContentType='email'
          placeholder='Email...'
          onChange={changeField}
          value={email}
        />
        <TextInput
          name="password"
          textContentType='password'
          placeholder='Mot de passe...'
          onChange={changeField}
          value={password}
          secureTextEntry
        />
      </SafeAreaView>
      <Button
        title='Accéder aux cartes du restaurant'
        onPress={() => navigation.navigate('Cards')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e4bef'
  },
  home_text: {
    color: 'white'
  }
});

Home.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired
};

export default Home;
