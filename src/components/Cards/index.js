import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView
} from 'react-native';

import PropTypes from 'prop-types';

import AddNewCardModal from '../../containers/AddNewCardModal';

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
      {!isLogged && (
        <View>
          <Text style={styles.cardsIsNotLoggedText}>
            Veuillez vous connecter pour accéder aux cartes du restaurant.
          </Text>
        </View>
      )}
      {isLogged && (
        
        <View>
          {isLoading && (
            <View>
              <ActivityIndicator size="large" animating={true} color="white" />
            </View>
          )}
          {!isLoading && (
            <>
            
              <View>
                <Text style={styles.cardsDescText}>
                  Sélectionnez une carte pour voir le détail.
                </Text>
                <View style={styles.cardsAdd}>
                <TouchableOpacity
                  style={styles.cardsAddButton}
                  onPress={handleAddNewCardModal}
                >
                  <Text style={styles.cardsAddButtonText}>
                    AJOUTER UNE NOUVELLE CARTE
                  </Text>
                </TouchableOpacity>
              </View>
              </View>
              <ScrollView>
              {cardsName.map((card) => (
                
                <View key={card.id}>
                  <TouchableOpacity
                    style={styles.cardsListButton}
                    onPress={() => navigation.navigate('Carte', { id: card.id })}
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
              </ScrollView>
              
              
            </>
          )}
        </View>
        
      )}
      {openAddNewCardModal && <AddNewCardModal />}
    </View>
    
  );
};

const styles = StyleSheet.create({
  cards: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#0e4bef',
    borderTopColor: '#ff5757',
    borderTopWidth: 5
  },
  cardsIsNotLoggedText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },
  cardsDescText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 20
  },
  cardsListButton: {
    marginBottom: 25,
    backgroundColor: '#e1c699',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  cardsListButtonTitle: {
    color: 'darkblue',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardsListButtonDesc: {
    color: 'darkblue',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  cardsAddButton: {
    backgroundColor: '#ff1616',
    borderColor: '#ff5757',
    borderWidth: 5,
    borderRadius: 10,
    marginHorizontal: 45,
    marginBottom: 20,
  },
  cardsAddButtonText: {
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
  }
});

Cards.propTypes = {
  cardsName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  onClickAddNewCardModal: PropTypes.func.isRequired,
  openAddNewCardModal: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired
};

export default Cards;
