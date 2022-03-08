import { View, Text, StyleSheet } from 'react-native';

const Card = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.card_text}>
                Carte du restaurant : Boissons, Plats
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: '100%',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e4bef'
    },
    cards_text: {
        color: 'white'
    }
});

export default Card;
