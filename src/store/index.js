import {
    createStore,
    applyMiddleware,
    compose
  } from 'redux';
  
  import reducer from '../reducers';
  import authMiddleware from '../middlewares/authMiddleware';
  import cardsMiddleware from '../middlewares/cardsMiddleware';
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const enhancers = composeEnhancers(
    applyMiddleware(authMiddleware, cardsMiddleware),
  );
  
  const store = createStore(reducer, enhancers);
  
  export default store;