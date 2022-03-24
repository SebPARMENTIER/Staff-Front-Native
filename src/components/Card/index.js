import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//import UpdateCardModal from '../../containers/UpdateCardModal';
//import DeleteCardModal from '../../containers/DeleteCardModal';



const Card = ({
  route,
  navigation,
  onClickUpdateCardModal,
  openUpdateCardModal,
  onClickDeleteCardModal,
  openDeleteCardModal,
  cardDeleteSuccess,
  setCardDeleteSuccessToFalse
}) => {
  const { id, card } = route.params;

  navigation.setOptions({ title: card.title });

  console.log('card', id);

  // Open updateCardModal and send informations to card container to put them into state to have them when updateCardModal is open
  //const handleUpdateCardModal = () => {
  //onClickUpdateCardModal(cardInfos.id, cardInfos.title, cardInfos.description);
  //};

  // Open deleteCardModal and send informations to card container to put them into state to have them when deleteCard Modal is open
  //const handleDeleteCardModal = () => {
  //onClickDeleteCardModal(cardInfos.id);
  //};

  // Use navigate to go back to /cards once a card is deleted and put cardDeleteSuccess to false
  // let navigate = useNavigate();
  // useEffect(() => {
  //   if (cardDeleteSuccess) {
  //     navigate('/cards');
  //     setCardDeleteSuccessToFalse();
  //   }
  // }, [cardDeleteSuccess]);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderTitle}>
          {card.title}
        </Text>
        <View style={styles.cardHeaderOptions}>
          <TouchableOpacity style={styles.cardHeaderOptionsUpdate}>
            <FontAwesome name='pencil' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardHeaderOptionsDelete}>
            <FontAwesome name="trash" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.cardDescription}>
        {card.description}
      </Text>
      <ScrollView>
        <View style={styles.cardDrinks}>
          <View style={styles.cardDrinksHeader}>
            <Text style={styles.cardDrinksHeaderDesc}>Nos boissons</Text>
            <TouchableOpacity style={styles.cardDrinksHeaderAdd}>
              <Ionicons name="add-circle" size={30} color="#ff1616" />
            </TouchableOpacity>
            {/* <Text style={styles.cardDrinksHeaderAdd}>+</Text> */}
          </View>
          {card.drinks_card.map((drink) => (
            <View
              key={drink.id}
              style={styles.cardDrinksDrink}
            >
              <View style={styles.cardDrinksDrinkHeader}>
                <View style={styles.cardDrinksDrinkHeaderElements}>
                  <Text style={styles.cardDrinksDrinkHeaderElementsTitle}>
                    {drink.title}
                  </Text>
                  <Text style={styles.cardDrinksDrinkHeaderElementsPrice}>
                    {drink.price}
                  </Text>
                </View>
                <View style={styles.cardDrinksDrinkHeaderOptions}>
                  <TouchableOpacity style={styles.cardDrinksDrinkHeaderOptionsUpdate}>
                    <FontAwesome name='pencil' size={20} color='black' />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cardDrinksDrinkHeaderOptionsDelete}>
                    <FontAwesome name="trash" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.cardDrinksDrinkDescription}>
                {drink.description}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.cardFoods}>
          <View style={styles.cardFoodsHeader}>
            <Text style={styles.cardFoodsHeaderDesc}>Nos plats</Text>
            <Text style={styles.cardFoodsHeaderAdd}>+</Text>
          </View>
          {card.foods_card.map((food) => (
            <View
              key={food.id}
              style={styles.cardFoodsFood}
            >
              <View style={styles.cardFoodsFoodHeader}>
                <View style={styles.cardFoodsFoodHeaderElements}>
                  <Text style={styles.cardFoodsFoodHeaderElementsTitle}>
                    {food.title}
                  </Text>
                  <Text style={styles.cardFoodsFoodHeaderElementsPrice}>
                    {food.price}
                  </Text>
                </View>
                <View style={styles.cardFoodsFoodHeaderOptions}>
                  <TouchableOpacity style={styles.cardFoodsFoodHeaderOptionsUpdate}>
                    <FontAwesome name='pencil' size={20} color='black' />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cardFoodsFoodHeaderOptionsDelete}>
                    <FontAwesome name="trash" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.cardFoodsFoodDescription}>
                {food.description}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      {/* {openUpdateCardModal && <UpdateCardModal />}
      {openDeleteCardModal && <DeleteCardModal />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: '100%',
    backgroundColor: '#0e4bef',
    borderTopColor: '#ff5757',
    borderTopWidth: 5,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  cardHeaderOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  cardHeaderOptionsUpdate: {
    marginRight: 15
  },
  cardDescription: {
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'left'
  },
  cardDrinks: {
    marginVertical: 15,
    padding: 10,
    backgroundColor: 'lightsalmon',
    borderColor: 'lightcoral',
    borderWidth: 5,
    borderRadius: 5
  },
  cardDrinksHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20
  },
  cardDrinksHeaderDesc: {
    width: '90%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  cardDrinksHeaderAdd: {
    width: '10%'
  },
  cardDrinksDrink: {
    paddingBottom: 15
  },
  cardDrinksDrinkHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardDrinksDrinkHeaderElements: {
    flex: 1,
    flexDirection: 'row'
  },
  cardDrinksDrinkHeaderElementsTitle: {
    marginRight: 10,
    textShadowColor: 'white',
    textShadowOffset: {
        width: 0,
        height: 2
    },
    textShadowRadius: 5
  },
  cardDrinksDrinkHeaderElementsPrice: {
    textShadowColor: 'white',
    textShadowOffset: {
        width: 0,
        height: 2
    },
    textShadowRadius: 5
  },
  cardDrinksDrinkHeaderOptions: {
    flexDirection: 'row'
  },
  cardDrinksDrinkHeaderOptionsUpdate: {
    marginRight: 15
  },
  cardDrinksDrinkDescription: {
    width: '75%',
    fontSize: 12,
    fontStyle: 'italic'
  }
});

Card.propTypes = {
  cardsName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  onClickUpdateCardModal: PropTypes.func.isRequired,
  onClickDeleteCardModal: PropTypes.func.isRequired,
  setCardDeleteSuccessToFalse: PropTypes.func.isRequired,
  openUpdateCardModal: PropTypes.bool.isRequired,
  openDeleteCardModal: PropTypes.bool.isRequired,
  cardDeleteSuccess: PropTypes.bool.isRequired
};

export default Card;
