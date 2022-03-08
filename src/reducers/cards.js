import {
    GET_ALL_CARDS,
    GET_ALL_CARDS_SUCCESS,
    GET_ALL_CARDS_ERROR,
    CLICK_ON_BUTTON_ADD_NEW_CARD,
    SET_ADD_NEW_CARD_INPUT_VALUE,
    CREATE_ADD_NEW_CARD_SUCCESS,
    CREATE_ADD_NEW_CARD_ERROR,
    CLICK_ON_BUTTON_ESCAPE_ADD_NEW_CARD,
  } from "../actions/cards";
  
  import { CLICK_ON_LOGOUT } from '../actions/user';
  
  export const initialState = {
    cardsName: [],
    isError: false,
    openAddNewCardModal: false,
    title: '',
    description: '',
    isAddNewCardModalError: false,
    openUpdateCardModal: false,
    cardId: '',
    newTitle: '',
    newDescription: '',
    isUpdateCardModalError: false,
    isLoading: false
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_ALL_CARDS:
        return {
          ...state,
          isLoading: true
        };
      case GET_ALL_CARDS_SUCCESS:
        return {
          ...state,
          cardsName: action.data,
          isLoading: false
        };
      case GET_ALL_CARDS_ERROR:
        return {
          ...state,
          isError: true,
          isLoading: false
        };
      case CLICK_ON_LOGOUT:
        return {
          ...state,
          cardsName: [],
          isError: false,
          openAddNewCardModal: false,
          title: '',
          description: '',
          isAddNewCardModalError: false,
          openUpdateCardModal: false,
          newTitle: '',
          newDescription: '',
          isUpdateCardModalError: false,
          isLoading: false
        };
      case CLICK_ON_BUTTON_ADD_NEW_CARD:
        return {
          ...state,
          openAddNewCardModal: true,
        };
      case SET_ADD_NEW_CARD_INPUT_VALUE:
        return {
          ...state,
          [action.name]: action.value
        };
      case CREATE_ADD_NEW_CARD_SUCCESS:
        return {
          ...state,
          openAddNewCardModal: false,
          title: '',
          description: '',
          isAddNewCardModalError: false
        };
      case CREATE_ADD_NEW_CARD_ERROR:
        return {
          ...state,
          isAddNewCardModalError: true
        };
      case CLICK_ON_BUTTON_ESCAPE_ADD_NEW_CARD:
        return {
          ...state,
          openAddNewCardModal: false,
          title: '',
          description: '',
          isAddNewCardModalError: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;