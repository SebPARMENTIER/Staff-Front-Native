import {
    CLICK_ON_BUTTON_UPDATE_CARD,
    SET_UPDATE_CARD_INPUT_VALUE,
    CREATE_UPDATE_CARD_SUCCESS,
    CREATE_UPDATE_CARD_ERROR,
    CLICK_ON_BUTTON_ESCAPE_UPDATE_CARD,
    CLICK_ON_BUTTON_DELETE_CARD,
    CREATE_DELETE_CARD_SUCCESS,
    CREATE_DELETE_CARD_ERROR,
    CLICK_ON_BUTTON_ESCAPE_DELETE_CARD,
    CARD_DELETE_SUCCESS_TO_FALSE
  } from "../actions/cards";
  
  export const initialState = {
    openUpdateCardModal: false,
    cardId: '',
    newTitle: '',
    newDescription: '',
    isUpdateCardModalError: false,
    openDeleteCardModal: false,
    isDeleteCardModalError: false,
    cardDeleteSuccess : false
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case CLICK_ON_BUTTON_UPDATE_CARD:
        return {
          ...state,
          cardId: action.value1,
          newTitle: action.value2,
          newDescription: action.value3,
          openUpdateCardModal: true
        };
      case SET_UPDATE_CARD_INPUT_VALUE:
        return {
          ...state,
          [action.name]: action.value
        };
      case CREATE_UPDATE_CARD_SUCCESS:
        return {
          ...state,
          openUpdateCardModal: false,
          cardId: '',
          newTitle: '',
          newDescription: '',
          isUpdateCardModalError: false
        };
      case CREATE_UPDATE_CARD_ERROR:
        return {
          ...state,
          isUpdateCardModalError: true
        };
      case CLICK_ON_BUTTON_ESCAPE_UPDATE_CARD:
        return {
          ...state,
          cardId: '',
          openUpdateCardModal: false,
          newTitle: '',
          newDescription: '',
          isUpdateCardModalError: false
        };
      case CLICK_ON_BUTTON_DELETE_CARD:
        return {
          ...state,
          cardId: action.value,
          openDeleteCardModal: true
        };
      case CREATE_DELETE_CARD_SUCCESS:
        return {
          ...state,
          cardId: '',
          openDeleteCardModal: false,
          cardDeleteSuccess : true,
          isDeleteCardModalError: false
        };
      case CREATE_DELETE_CARD_ERROR:
        return {
          ...state,
          cardId: '',
          cardDeleteSuccess : false,
          isDeleteCardModalError: true
        };
      case CLICK_ON_BUTTON_ESCAPE_DELETE_CARD:
        return {
          ...state,
          cardId: '',
          openDeleteCardModal: false,
          isDeleteCardModalError: false
        };
      case CARD_DELETE_SUCCESS_TO_FALSE:
        return {
          ...state,
          cardDeleteSuccess: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;