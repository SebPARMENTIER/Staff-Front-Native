import { connect } from "react-redux";

import Header from "../../components/Header";

import { clickOnButtonLogout } from '../../actions/user';

const mapStateToProps = (state) => ({
  firstname: state.user.firstname,
  isLogged: state.user.isLogged,
  openLogout: state.user.openLogout
});

const mapDispatchToProps = (dispatch) => ({
  onClickArrow: () => {
    dispatch(clickOnButtonLogout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);