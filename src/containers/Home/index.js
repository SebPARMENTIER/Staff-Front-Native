import { connect } from "react-redux";

import Home from "../../components/Home";

import {
  createSetInputValueAction,
  createSubmitAction,
  clickOnLogout
} from '../../actions/user';

import {
  createGetAllCardsAction
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  restaurant: state.user.restaurant,
  firstname: state.user.firstname,
  job: state.user.job,
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
  },
  onClickLogout: () => {
    dispatch(clickOnLogout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);