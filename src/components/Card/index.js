import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';
//import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { FontAwesome } from '@expo/vector-icons'; 

//import UpdateCardModal from '../../containers/UpdateCardModal';
//import DeleteCardModal from '../../containers/DeleteCardModal';



const Card = ({
  route,
  navigation,
  //id,
  //card,
  cardsName,
  onClickUpdateCardModal,
  openUpdateCardModal,
  onClickDeleteCardModal,
  openDeleteCardModal,
  cardDeleteSuccess,
  setCardDeleteSuccessToFalse
}) => {
  // Find current id from url
  //const { id } = useParams();

  // Keep the card with id from url
  //const cardInfos = cardsName.find(element => element.id == id);

  

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
    <View className="card">
      <View className="card-header">
        <Text className="card-header-title">
          {card.title}
        </Text>
        <View className="card-header-options">
          <TouchableOpacity className="card-header-options-update">
            <FontAwesome name='pencil' size={24} color='black' />
          </TouchableOpacity>
          <TouchableOpacity className="card-header-options-delete">
            <FontAwesome name="trash" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text className="card-description">
        {card.description}
      </Text>
      <View className="card-drinks">
        <View className="card-drinks-header">
          <Text className="card-drinks-header-desc">Nos boissons</Text>
          <Text className="card-drinks-header-add">+</Text>
        </View>
        {card.drinks_card.map((drink) => (
          <View
            key={drink.id}
            className="card-drinks-drink"
          >
            <View className="card-drinks-drink-header">
              <View className="card-drinks-drink-header-elements">
                <Text className="card-drinks-drink-header-elements-title">
                  {drink.title}
                </Text>
                <Text className="card-drinks-drink-header-elements-price">
                  {drink.price}
                </Text>
              </View>
              <View className="card-drinks-drink-header-options">
                <TouchableOpacity className="card-drinks-drink-header-options-update">
                  <FontAwesome name='pencil' size={24} color='black' />
                </TouchableOpacity>
                <Text className="card-drinks-drink-header-options-delete">
                  <FontAwesome name="trash" size={24} color="black" />
                </Text>
              </View>
            </View>
            <Text className="card-drinks-drink-description">
              {drink.description}
            </Text>
          </View>
        ))}
      </View>
      <View className="card-foods">
        <View className="card-foods-header">
          <Text className="card-foods-header-desc">Nos plats</Text>
          <Text className="card-foods-header-add">+</Text>
        </View>
        {card.foods_card.map((food) => (
          <View
            key={food.id}
            className="card-foods-food"
          >
            <View className="card-foods-food-header">
              <View className="card-foods-food-header-elements">
                <Text className="card-foods-food-header-elements-title">
                  {food.title}
                </Text>
                <Text className="card-foods-food-header-elements-price">
                  {food.price}
                </Text>
              </View>
              <View className="card-foods-food-header-options">
                <TouchableOpacity className="card-foods-food-header-options-update">
                  <FontAwesome name='pencil' size={24} color='black' />
                </TouchableOpacity>
                <TouchableOpacity className="card-foods-food-header-options-delete">
                  <FontAwesome name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <Text className="card-foods-food-description">
              {food.description}
            </Text>
          </View>
        ))}
      </View>
      {/* {openUpdateCardModal && <UpdateCardModal />}
      {openDeleteCardModal && <DeleteCardModal />} */}
    </View>
  );
};

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

const styles = StyleSheet.create({
    card: {
        height: '100%',
        flex:1,
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

export default Card;
