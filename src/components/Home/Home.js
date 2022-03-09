import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
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
          <Text style={styles.homeHeader}>
            stan
          </Text>
          <Text style={styles.homeDesc}>
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
              style={{ paddingTop: '5%'}}
              name="password"
              textContentType='password'
              placeholder='Mot de passe...'
              onChange={changeField}
              value={password}
              secureTextEntry
            />
            {isError && (
              <Text style={styles.homeConnexionFormError}>
                Vérifiez vos identifiants de connexion.
              </Text>
            )}
            {isLoading && (
              <View style={styles.homeConnexionLoading}>
                <Loading />
              </View>
            )}
            {!isLoading && (
              <TouchableOpacity style={styles.homeConnexionFormButton}>
                <Button
                  title='Valider'
                  onPress={handleSubmit}
                  color='#ff1616'
                />
              </TouchableOpacity>
            )}
          </SafeAreaView>
        </>
      )}
      {isLogged && (
        <>
          {isError && (
            <Text style={styles.homeAccessError}>
              Une erreur s'est produite, veuillez vous reconnecter.
            </Text>
          )}
          {!isError && (
            <>
            <View style={styles.homeAccess}>
              <View style={styles.homeAccessRestaurant}>
                <Text style={styles.homeAccessRestaurantName}>{restaurant.name}</Text>
                <Text style={styles.homeAccessRestaurantAdress}>{restaurant.adress}</Text>
                <View style={styles.homeAccessRestaurantLocation}>
                  <Text style={styles.homeAccessRestaurantLocationZipcode}>{restaurant.zip_code}</Text>
                  <Text style={styles.homeAccessRestaurantLocationCity}>{restaurant.city}</Text>
                </View>
                <Text style={styles.homeAccessRestaurantPhone}>{restaurant.phone}</Text>
                <Text style={styles.homeAccessRestaurantEmail}>{restaurant.email}</Text>
              </View>
              <TouchableOpacity style={styles.homeAccessCardButton}>
                <Button
                  title='Accéder aux cartes du restaurant'
                  onPress={handleGetAllCards}
                  color='#ff1616'
                />
              </TouchableOpacity>
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
    alignItems: 'center',
    backgroundColor: '#0e4bef',
    paddingTop: 100
  },
  homeHeader: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#ff1616',
    textShadowOffset: {
        width: 5,
        height: 5
    },
    textShadowRadius: 5,
    paddingBottom: 100
  },
  homeDesc: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100
  },
  homeConnexionFormError: {
    color: 'white',
    paddingBottom: 20
  },
  homeConnexionFormButton: {
    color: 'white',
    textShadowColor: '#0e4bef',
    textShadowOffset: {
        width: 1,
        height: 1
    },
    textShadowRadius: 1,
    backgroundColor: '#ff1616',
    borderColor: '#ff5757',
    borderWidth: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 30
  },
  homeAccess: {
    textAlign: 'center',
  },
  homeAccessError: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20
  },
  homeAccessRestaurant: {
    color: 'white'
  },
  homeAccessRestaurantName: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  homeAccessRestaurantAdress: {
    color: 'white'
  },
  homeAccessRestaurantLocation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  homeAccessRestaurantLocationZipcode: {
    color: 'white',
    paddingRight: 5
  },
  homeAccessRestaurantLocationCity: {
    color: 'white'
  },
  homeAccessRestaurantPhone: {
    color: 'white'
  },
  homeAccessRestaurantEmail: {
    color: 'white'
  },
  homeAccessCardButton: {
    color: 'white',
    textShadowColor: '#0e4bef',
    textShadowOffset: {
        width: 1,
        height: 1
    },
    textShadowRadius: 1,
    backgroundColor: '#ff1616',
    borderColor: '#ff5757',
    borderWidth: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 30
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
