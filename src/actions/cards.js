export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const GET_ALL_CARDS_SUCCESS = 'GET_ALL_CARDS_SUCCESS';
export const GET_ALL_CARDS_ERROR = 'GET_ALL_CARDS_ERROR';
export const CLICK_ON_BUTTON_ADD_NEW_CARD = 'CLICK_ON_BUTTON_ADD_NEW_CARD';
export const SET_ADD_NEW_CARD_INPUT_VALUE ='SET_ADD_NEW_CARD_INPUT_VALUE';
export const CREATE_ADD_NEW_CARD = 'CREATE_ADD_NEW_CARD';
export const CLICK_ON_BUTTON_ESCAPE_ADD_NEW_CARD = 'CLICK_ON_BUTTON_ESCAPE_ADD_NEW_CARD';
export const CREATE_ADD_NEW_CARD_SUCCESS = 'CREATE_ADD_NEW_CARD_SUCCESS';
export const CREATE_ADD_NEW_CARD_ERROR = 'CREATE_ADD_NEW_CARD_ERROR';
export const CLICK_ON_BUTTON_UPDATE_CARD = 'CLICK_ON_BUTTON_UPDATE_CARD';
export const SET_UPDATE_CARD_INPUT_VALUE = 'SET_UPDATE_CARD_INPUT_VALUE';
export const CREATE_UPDATE_CARD = 'CREATE_UPDATE_CARD';
export const CLICK_ON_BUTTON_ESCAPE_UPDATE_CARD = 'CLICK_ON_BUTTON_ESCAPE_UPDATE_CARD';
export const CREATE_UPDATE_CARD_SUCCESS = 'CREATE_UPDATE_CARD_SUCCESS';
export const CREATE_UPDATE_CARD_ERROR = 'CREATE_UPDATE_CARD_ERROR';
export const CLICK_ON_BUTTON_DELETE_CARD = 'CLICK_ON_BUTTON_DELETE_CARD';
export const CREATE_DELETE_CARD = 'CREATE_DELETE_CARD';
export const CLICK_ON_BUTTON_ESCAPE_DELETE_CARD = 'CLICK_ON_BUTTON_ESCAPE_DELETE_CARD';
export const CREATE_DELETE_CARD_SUCCESS = 'CREATE_DELETE_CARD_SUCCESS';
export const CREATE_DELETE_CARD_ERROR = 'CREATE_DELETE_CARD_ERROR';
export const CARD_DELETE_SUCCESS_TO_FALSE = 'CARD_DELETE_SUCCESS_TO_FALSE';

export const createGetAllCardsAction = () => ({ type: GET_ALL_CARDS });

export const createGellAllCardsSuccessAction = (data) => ({ type: GET_ALL_CARDS_SUCCESS, data});

export const createGellAllCardsErrorAction = () => ({ type: GET_ALL_CARDS_ERROR });

export const clickOnButtonAddNewCard = () => ({ type: CLICK_ON_BUTTON_ADD_NEW_CARD });

export const createAddNewCardSetInputValueAction = (newValue, name) => ({
  type: SET_ADD_NEW_CARD_INPUT_VALUE,
  value: newValue,
  name: name
});

export const createAddNewCardAction = () => ({ type: CREATE_ADD_NEW_CARD });

export const clickOnButtonEscapeAddNewCard = () => ({ type: CLICK_ON_BUTTON_ESCAPE_ADD_NEW_CARD });

export const createAddNewCardSuccesAction = () => ({ type: CREATE_ADD_NEW_CARD_SUCCESS });

export const createAddNewCardErrorAction = () => ({ type: CREATE_ADD_NEW_CARD_ERROR });

export const clickOnButtonUpdateCard = (value1, value2, value3) => ({
  type: CLICK_ON_BUTTON_UPDATE_CARD,
  value1: value1,
  value2: value2,
  value3: value3
});

export const createUpdateCardSetInputValueAction = (newValue, name) => ({
  type: SET_UPDATE_CARD_INPUT_VALUE,
  value: newValue,
  name: name
});

export const createUpdateCardAction = () => ({ type: CREATE_UPDATE_CARD });

export const clickOnButtonEscapeUpdateCard = () => ({ type: CLICK_ON_BUTTON_ESCAPE_UPDATE_CARD });

export const createUpdateCardSuccesAction = () => ({ type: CREATE_UPDATE_CARD_SUCCESS });

export const createUpdateCardErrorAction = () => ({ type: CREATE_UPDATE_CARD_ERROR });

export const clickOnButtonDeleteCard = (value) => ({
  type: CLICK_ON_BUTTON_DELETE_CARD,
  value: value
});

export const createDeleteCardAction = () => ({ type: CREATE_DELETE_CARD });

export const clickOnButtonEscapeDeleteCard = () => ({ type: CLICK_ON_BUTTON_ESCAPE_DELETE_CARD });

export const createDeleteCardSuccesAction = () => ({ type: CREATE_DELETE_CARD_SUCCESS });

export const createDeleteCardErrorAction = () => ({ type: CREATE_DELETE_CARD_ERROR });

export const cardDeleteSuccessToFalse = () => ({ type: CARD_DELETE_SUCCESS_TO_FALSE });