import {
    SUBMIT_LOGIN,
    SET_INPUT_VALUE,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    CLICK_ON_BUTTON_LOGOUT,
    CLICK_ON_LOGOUT
  } from '../actions/user';
  
  export const initialState = {
    email: '',
    password: '',
    firstname: '',
    restaurant: {},
    token: null,
    isError: false,
    isLogged: false,
    openLogout: false,
    isLoading: false
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SUBMIT_LOGIN:
        return {
          ...state,
          isLoading: true
        };
      case SET_INPUT_VALUE:
        return {
          ...state,
          [action.name]: action.value,
        };
      case LOGIN_SUCCESS:
        const { firstname, restaurant, accessToken } = action.data;
        return {
          ...state,
          firstname,
          restaurant,
          token: accessToken,
          isError: false,
          isLogged: true,
          email: '',
          password: '',
          isLoading: false
        };
      case LOGIN_ERROR:
        return {
          ...state,
          isError: true,
          isLoading: false
        };
      case CLICK_ON_BUTTON_LOGOUT:
        return {
          ...state,
          openLogout: !state.openLogout,
        };
      case CLICK_ON_LOGOUT:
      return {
        ...state,
        email: '',
        password: '',
        firstname: '',
        restaurant: '',
        token: null,
        isError: false,
        isLogged: false,
        openLogout: false,
        isLoading: false
      };
      default:
        return state;
    }
  };
  
  export default reducer;