import { connect } from 'react-redux';

import UpdateCardModal from '../../components/UpdateCardModal';

import {
  createUpdateCardSetInputValueAction,
  createUpdateCardAction,
  clickOnButtonEscapeUpdateCard
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  newTitle: state.card.newTitle,
  newDescription: state.card.newDescription,
  isUpdateCardModalError: state.card.isUpdateCardModalError
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createUpdateCardSetInputValueAction(newValue, name));
  },
  handleUpdateCardModal: () => {
    dispatch(createUpdateCardAction());
  },
  onClickEscapeUpdateCardModal: () => {
    dispatch(clickOnButtonEscapeUpdateCard());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCardModal);