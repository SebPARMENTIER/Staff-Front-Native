import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import PropTypes from 'prop-types';

const Cards = ({
  navigation,
  cardsName,
  onClickAddNewCardModal,
  openAddNewCardModal,
  isLoading,
  isLogged
}) => {
  const handleAddNewCardModal = () => {
    onClickAddNewCardModal();
  };
  return (
    <View style={styles.cards}>
      {isLoading && (
        <View style={styles.cardsLoading}>
          <ActivityIndicator size="large" animating={true} color="white" />
        </View>
      )}
      {!isLoading && (
        <>
          <View style={styles.cardsDesc}>
            <Text style={styles.cardsDescText}>
              Sélectionnez une carte pour voir le détail.
            </Text>
          </View>
          {cardsName.map((card) => (
            <View
              key={card.id}
              style={styles.cardsList}
            >
              <TouchableOpacity
                style={styles.cardsListButton}
                onPress={() => navigation.navigate('Carte', {id: card.id})}
              >
                <Text style={styles.cardsListButtonTitle}>
                  {card.title}
                </Text>
                <Text style={styles.cardsListButtonDesc}>
                  {card.description}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.cardsAdd}>
            <TouchableOpacity
              style={styles.cardsAddButton}
              onPress={handleAddNewCardModal}
            >
              <Text style={styles.cardsAddButtonText}>
                Ajoutez une nouvelle carte
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {/* <Text style={styles.cards_text}>
        Voici les cartes du restaurant
      </Text>
      <Button
        title='Voir le détails de cette carte'
        onPress={() => navigation.navigate('Carte')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e4bef',
    borderTopColor: '#ff5757',
    borderTopWidth: 5
  },
  cards_text: {
    color: 'white'
  }
});

export default Cards;
