import {
  Button,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

//import Logout from '../../containers/Logout';

const Header = ({
  firstname,
  isLogged,
  openLogout,
  onClickArrow
}) => {
  
  const handleOnClickArrow = () => {
    onClickArrow();
  };
  return (
    <View style={styles.header}>
      <View style={styles.headerNav}>
        {isLogged && (
          <View style={styles.headerNavContent}>
            <Text style={styles.headerNavContentWelcome}>
            Bienvenue {firstname}
            </Text>
            <TouchableOpacity style={openLogout ? styles.headerNavContentLogoutOpen : styles.headerNavContentLogout}>
              <Button
                onPress={handleOnClickArrow}
                title='&gt;'
                color='#ff1616'
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* <Logout /> */}
    </View>
  );
};

Header.propTypes = {
  firstname: PropTypes.string,
  isLogged: PropTypes.bool,
  openLogout: PropTypes.bool,
  onClickArrow: PropTypes.func
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    maxHeight: '5%',
    backgroundColor: '#ff1616',
    borderBottomColor: '#ff5757',
    borderBottomWidth: 5,
    flex: 1,
    flexDirection: 'column',
    // position: 'absolute',
    // top: 0
  },
  headerNav: {
    flex: 1,
    alignItems: 'center',
  },
  headerNavContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerNavContentWelcome: {
    color: 'white',
    textShadowColor: '#0e4bef',
    textShadowOffset: {
        width: 1,
        height: 1
    },
    textShadowRadius: 1,
    paddingRight: '0.5em'
  },
  headerNavContentLogout: {
    color: 'white',
    textShadowColor: '#0e4bef',
    textShadowOffset: {
        width: 1,
        height: 1
    },
    textShadowRadius: 1
  },
  headerNavContentLogoutOpen: {
    color: 'white',
    textShadowColor: '#0e4bef',
    textShadowOffset: {
        width: 1,
        height: 1
    },
    textShadowRadius: 1,
    transform: [{
      rotate: '-180deg'
    }]
  }
})

export default Header;
