import axios from "axios";

import { apiBaseUrl } from '../const';

import {
  GET_ALL_CARDS,
  CREATE_ADD_NEW_CARD,
  CREATE_UPDATE_CARD,
  CREATE_DELETE_CARD,
  createGellAllCardsSuccessAction,
  createGellAllCardsErrorAction,
  createAddNewCardSuccesAction,
  createAddNewCardErrorAction,
  createGetAllCardsAction,
  createUpdateCardSuccesAction,
  createUpdateCardErrorAction,
  createDeleteCardSuccesAction,
  createDeleteCardErrorAction
} from '../actions/cards';

const cardsMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_ALL_CARDS: {
      const config = {
        method: 'get',
        url: `${apiBaseUrl}/card`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        }
      };
      axios(config)
        .then((response) => {
          store.dispatch(createGellAllCardsSuccessAction(response.data));
        })
        .catch(() => {
          store.dispatch(createGellAllCardsErrorAction());
        });
      break;
    };
    case CREATE_ADD_NEW_CARD: {
      const config = {
        method: 'post',
        url: `${apiBaseUrl}/card`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        data: {
          title: state.cards.title,
          description: state.cards.description,
          restaurant_id: state.user.restaurant_id
        },
      };
      axios(config)
        .then(() => {
          store.dispatch(createAddNewCardSuccesAction());
          store.dispatch(createGetAllCardsAction());
        })
        .catch(() => {
          store.dispatch(createAddNewCardErrorAction());
        });
      break;
    };
    case CREATE_UPDATE_CARD: {
      const config = {
        method: 'patch',
        url: `${apiBaseUrl}/card`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        data: {
          id: state.card.cardId,
          title: state.card.newTitle,
          description: state.card.newDescription,
        },
      };
      axios(config)
        .then(() => {
          store.dispatch(createUpdateCardSuccesAction());
          store.dispatch(createGetAllCardsAction());
        })
        .catch(() => {
          store.dispatch(createUpdateCardErrorAction());
        });
      break;
    };
    case CREATE_DELETE_CARD: {
      const config = {
        method: 'delete',
        url: `${apiBaseUrl}/card/${state.card.cardId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
      };
      axios(config)
        .then(() => {
          store.dispatch(createDeleteCardSuccesAction());
          store.dispatch(createGetAllCardsAction());
        })
        .catch(() => {
          store.dispatch(createDeleteCardErrorAction());
        });
      break;
    }
    default:
      next(action);
  }
};

export default cardsMiddleware;