import { combineReducers } from 'redux';

import userReducer from './user';
import cardsReducer from './cards';
import cardReducer from './card';

const rootReducer = combineReducers({
  user: userReducer,
  cards: cardsReducer,
  card: cardReducer
});

export default rootReducer;