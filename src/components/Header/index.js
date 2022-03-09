import {
  // Button,
  // TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

// import PropTypes from 'prop-types';

//import Logout from '../../containers/Logout';

const Header = ({
  // firstname,
  // isLogged,
  // openLogout,
  // onClickArrow
}) => {
  
  // const handleOnClickArrow = () => {
  //   onClickArrow();
  // };
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>
        stan  
      </Text>
    </View>
  );
};

// Header.propTypes = {
//   firstname: PropTypes.string,
//   isLogged: PropTypes.bool,
//   openLogout: PropTypes.bool,
//   onClickArrow: PropTypes.func
// };

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '35%',
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
  }
  // headerNavContent: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // headerNavContentWelcome: {
  //   color: 'white',
  //   textShadowColor: '#0e4bef',
  //   textShadowOffset: {
  //       width: 1,
  //       height: 1
  //   },
  //   textShadowRadius: 1,
  //   paddingRight: 5
  // },
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
