import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.home}>
            <Text style={styles.home_text}>
                Hello    
            </Text>
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
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e4bef'
    },
    home_text: {
        color: 'white'
    }
});

export default Home;
