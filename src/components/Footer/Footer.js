import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Footer = () => {
    // Get the current year
    const now = new Date();
    const year = now.getFullYear();
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Stan - {year}
        </Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    footer: {
        width: '100%',
        maxHeight: '5%',
        backgroundColor: '#ff1616',
        borderTopColor: '#ff5757',
        borderTopWidth: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    footerText: {
        color: 'white',
        textShadowColor: '#0e4bef',
        textShadowOffset: {
            width: 1,
            height: 1
        },
        textShadowRadius: 1
    }
  });
  
  export default Footer;
