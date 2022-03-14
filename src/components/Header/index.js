import {
  //Button,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

//import Logout from '../../containers/Logout';

const Header = ({
  onClickLogout,
  navigation,
  isLogged,
  // openLogout,
  // onClickArrow
}) => {
  const handleLogout = () => {
    onClickLogout();
    //navigation.goBack('Home');
  };
  // const handleOnClickArrow = () => {
  //   onClickArrow();
  // };
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          stan  
        </Text>
      </View>
      {isLogged && (
        <TouchableOpacity
        onPress={handleLogout}
        >
          <Text style={styles.headerLogout}>
            Se déconnecter  
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool,
  onClickLogout: PropTypes.func
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#ff1616',
    borderBottomColor: '#ff5757',
    borderBottomWidth: 5,
    // flex: 1,
    // flexDirection: 'column',
    // position: 'absolute',
    // top: 0
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textShadowColor: '#0e4bef',
    textShadowOffset: {
        width: 5,
        height: 5
    },
    textShadowRadius: 5,
    paddingTop: 20
  },
  // headerNavContent: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  headerLogout: {
    color: 'white',
    textShadowColor: '#0e4bef',
    textShadowOffset: {
        width: 1,
        height: 1
    },
    textShadowRadius: 1,
    textAlign: 'right',
    paddingRight: 10
  },
  // headerNavContentLogout: {
  //   color: 'white',
  //   textShadowColor: '#0e4bef',
  //   textShadowOffset: {
  //       width: 1,
  //       height: 1
  //   },
  //   textShadowRadius: 1
  // },
  // headerNavContentLogoutOpen: {
  //   color: 'white',
  //   textShadowColor: '#0e4bef',
  //   textShadowOffset: {
  //       width: 1,
  //       height: 1
  //   },
  //   textShadowRadius: 1,
  //   transform: [{
  //     rotate: '-180deg'
  //   }]
  // }
})

export default Header;
