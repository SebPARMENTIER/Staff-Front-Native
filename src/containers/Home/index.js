import { connect } from "react-redux";

import Home from "../../components/Home";

import {
  createSetInputValueAction,
  createSubmitAction
} from '../../actions/user';

import {
  createGetAllCardsAction
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  restaurant: state.user.restaurant,
  isError: state.user.isError,
  isLogged: state.user.isLogged,
  isLoading: state.user.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createSetInputValueAction(newValue, name));
  },
  handleLogin: () => {
    dispatch(createSubmitAction());
  },
  getAllCards: () => {
    dispatch(createGetAllCardsAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);