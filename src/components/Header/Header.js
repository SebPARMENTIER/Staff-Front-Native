import { Button, StyleSheet, View, Text, Linking } from 'react-native';
// import PropTypes from 'prop-types';

//import Logout from '../../containers/Logout';

const Header = (
//   firstname,
//   isLogged,
//   openLogout,
//   onClickArrow
) => {
  // Open logout menu
  const isLogged = true;
//   const openLogout = false;
  const firstname = 'Seb';
//   const handleOnClickArrow = () => {
//     onClickArrow();
//   };
  return (
    <View style={styles.header}>
      <View style={styles.headerNav}>
        <View style={styles.headerNavLeftside}>
            <Text
            style={styles.headerNavLeftsideLink}
            onPress={() => Linking.openURL('/')}
            >
                Accueil
            </Text>
        </View>
        {isLogged && (
          <View style={styles.headerNavRightside}>
            <Text style={styles.headerNavRightsideWelcome}>
            Bienvenue {firstname}
            </Text>
            <Button
              style={styles.headerNavRightsideLogout}
              onPress={() => console.log('coucou')}
              title='&lt;'
              color='#ff1616'
            />
          </View>
        )}
      </View>
      {/* <Logout /> */}
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
        height: '10%',
        backgroundColor: '#ff1616',
        backgroundColor: '#ff1616',
        borderBottomColor: '#ff5757',
        borderBottomWidth: '5px',
        position: 'absolute',
        top: 0
    },
    headerNav: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerNavLeftside : {
        paddingLeft: '1em'
    },
    headerNavLeftsideLink: {
        color: 'white',
    },
    headerNavRightside: {
        paddingRight: '1em',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerNavRightsideWelcome: {
        color: 'white',
        paddingRight: '0.5em'
    },
    headerNavRightsideLogout: {
        backgroundColor: '#ff1616',
        color: 'green'
    },
    headerNavRightsideLogoutOpen: {
        backgroundColor: '#ff1616',
        color: 'white',
        transform: [{
            rotate: '-180deg'
        }],
    }
})

export default Header;
