import { View, Text, Button, StyleSheet } from 'react-native';

const Cards = ({ navigation }) => {
    return (
        <View style={styles.cards}>
            <Text style={styles.cards_text}>
                Voici les cartes du restaurant
            </Text>
            <Button
                title='Voir le détails de cette carte'
                onPress={() => navigation.push('Card')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cards: {
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

export default Cards;
