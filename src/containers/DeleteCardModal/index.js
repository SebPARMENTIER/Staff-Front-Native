import { connect } from 'react-redux';

import DeleteCardModal from '../../components/DeleteCardModal';

import {
  createDeleteCardAction,
  clickOnButtonEscapeDeleteCard
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  cardDeletesSuccess : state.card.cardDeletesSuccess,
  isDeleteCardModalError: state.card.isDeleteCardModalError
});

const mapDispatchToProps = (dispatch) => ({
  onClickValidateDeleteCardModal: () => {
    dispatch(createDeleteCardAction());
  },
  onClickEscapeDeleteCardModal: () => {
    dispatch(clickOnButtonEscapeDeleteCard());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCardModal);