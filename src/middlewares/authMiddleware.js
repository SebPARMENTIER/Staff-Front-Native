import axios from "axios";

import {
  SUBMIT_LOGIN,
  createLoginSuccessAction,
  createLoginErrorAction
} from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const config = {
        method: 'post',
        url: 'https://seb-stan.herokuapp.com/api/v1/login',
        data: {
          email: state.user.email,
          password: state.user.password,
        },
      };
      axios(config)
        .then((response) => {
          const data = { ...response.data };
          store.dispatch(createLoginSuccessAction(data));
        })
        .catch(() => {
          store.dispatch(createLoginErrorAction());
        });
      break;
    }
    default:
      next(action);
  }
};

export default authMiddleware;