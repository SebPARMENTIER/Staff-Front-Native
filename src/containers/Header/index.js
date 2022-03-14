import { connect } from "react-redux";

import Header from "../../components/Header";

import { clickOnLogout } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => {
    dispatch(clickOnLogout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);