import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

import Field from '../Field/Field';

const Home = ({
  navigation,
  email,
  password,
  restaurant,
  changeField,
  handleLogin,
  isError,
  isLogged,
  getAllCards,
  isLoading
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  const handleGetAllCards = () => {
    getAllCards();
    navigation.navigate('Cards');
  };
  return (
    <View style={styles.home}>
      {!isLogged && (
        <>
          <Text>
            stan
          </Text>
          <Text style={styles.home_text}>
          Bonjour, veuillez saisir vos identifiants pour vous connecter.
          </Text>
          <SafeAreaView>
            <Field
              autoFocus
              name="email"
              textContentType='email'
              placeholder='Email...'
              onChange={changeField}
              value={email}
            />
            <Field
              name="password"
              textContentType='password'
              placeholder='Mot de passe...'
              onChange={changeField}
              value={password}
              secureTextEntry
            />
            {isError && (
              <Text>
                Vérifiez vos identifiants de connexion.
              </Text>
            )}
            {isLoading && (
              <View>
                <Loading />
              </View>
            )}
            {!isLoading && (
              <Button
              title='Valider'
              onPress={handleSubmit}
            />
            )}
          </SafeAreaView>
        </>
      )}
      {isLogged && (
        <>
          {isError && (
            <div className="home-access-error">
              Une erreur s'est produite, veuillez vous reconnecter.
            </div>
          )}
          {!isError && (
            <>
            <View className="home-access">
              <View className="home-access-restaurant">
                <Text className="home-access-restaurant-name">{restaurant.name}</Text>
                <Text className="home-access-restaurant-adress">{restaurant.adress}</Text>
                <View className="home-access-restaurant-location">
                  <Text className="home-access-restaurant-location-zip_code">{restaurant.zip_code}</Text>
                  <Text className="home-access-restaurant-location-city">{restaurant.city}</Text>
                </View>
                <Text className="home-access-restaurant-phone">{restaurant.phone}</Text>
                <Text className="home-access-restaurant-email">{restaurant.email}</Text>
              </View>
              <Button
                title='Accéder aux cartes du restaurant'
                onPress={handleGetAllCards}
              />
            </View>
            </>
          )}
        </>
      )}
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
  restaurant: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    adress: PropTypes.string,
    zip_code: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
  }).isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  getAllCards: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Home;
