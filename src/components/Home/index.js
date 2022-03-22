import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import PropTypes from 'prop-types';

import Field from '../Field/Field';

const Home = ({
  navigation,
  email,
  password,
  firstname,
  restaurant,
  job,
  changeField,
  handleLogin,
  isError,
  isLogged,
  getAllCards,
  isLoading,
  onClickLogout
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  const handleGetAllCards = () => {
    getAllCards();
    navigation.navigate('Cards');
  };
  const handleLogout = () => {
    onClickLogout();
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
          <SafeAreaView style={styles.homeForm}>
            <Field
              autoFocus
              name="email"
              textContentType="emailAddress"
              placeholder='Email...'
              onChange={changeField}
              value={email}
            />
            <Field
              name="password"
              textContentType="password"
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
                <ActivityIndicator size="large" animating={true} color="white" />
              </View>
            )}
            {!isLoading && (
              <TouchableOpacity
                style={styles.homeConnexionFormButton}
                onPress={handleSubmit}
              >
                <Text style={styles.homeConnexionFormButtonText}>
                  VALIDER
                </Text>
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
              <View>
                <Text style={styles.homeAccessWelcome}>
                  Bonjour {firstname},
                </Text>
                <Text style={styles.homeAccessJob}>
                  {job.title} de l'établissement
                </Text>
              </View>
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
              <TouchableOpacity
                style={styles.homeAccessCardButton}
                onPress={handleGetAllCards}
              >
                <Text style={styles.homeAccessCardButtonText}>
                  ACCEDER AUX CARTES DU RESTAURANT
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleLogout}
              >
                <Text style={styles.homeAccessLogout}>
                  Se déconnecter  
                </Text>
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
    width: '100%',
    height: '100%',
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#0e4bef',
    borderTopColor: '#ff5757',
    borderTopWidth: 5
  },
  homeHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textShadowColor: '#ff1616',
    textShadowOffset: {
        width: 5,
        height: 5
    },
    textShadowRadius: 5,
    marginBottom: 50
  },
  homeDesc: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  homeForm: {
    width: '70%'
  },
  homeConnexionFormError: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold'
  },
  homeConnexionFormButton: {
    backgroundColor: '#ff1616',
    borderColor: '#ff5757',
    borderWidth: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  homeConnexionFormButtonText: {
    height: 45,
    color: 'white',
    textShadowColor: '#0e4bef',
    textShadowOffset: {
        width: 1,
        height: 1
    },
    textShadowRadius: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  homeAccess: {
    textAlign: 'center',
  },
  homeAccessError: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20
  },
  homeAccessWelcome: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  homeAccessJob: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30
  },
  homeAccessRestaurant: {
    color: 'white',
  },
  homeAccessRestaurantName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  homeAccessRestaurantAdress: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  homeAccessRestaurantLocation: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  homeAccessRestaurantLocationZipcode: {
    color: 'white',
    fontSize: 16,
    paddingRight: 5
  },
  homeAccessRestaurantLocationCity: {
    color: 'white',
    fontSize: 16
  },
  homeAccessRestaurantPhone: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  homeAccessRestaurantEmail: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
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
    marginTop: 50
  },
  homeAccessCardButtonText: {
    height: 45,
    color: 'white',
    textShadowColor: '#0e4bef',
    textShadowOffset: {
        width: 1,
        height: 1
    },
    textShadowRadius: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  homeAccessLogout: {
    color: 'white',
    textAlign: 'center',
    marginTop: 100
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
  onClickLogout: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Home;
