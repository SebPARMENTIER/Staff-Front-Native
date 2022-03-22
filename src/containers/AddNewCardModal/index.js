import { connect } from 'react-redux';

import AddNewCardModal from '../../components/AddNewCardModal';

import {
  createAddNewCardSetInputValueAction,
  createAddNewCardAction,
  clickOnButtonEscapeAddNewCard
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  title: state.cards.title,
  description: state.cards.description,
  isAddNewCardModalError: state.cards.isAddNewCardModalError
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createAddNewCardSetInputValueAction(newValue, name));
  },
  handleAddNewCardModal: () => {
    dispatch(createAddNewCardAction());
  },
  onClickEscapeAddNewCardModal: () => {
    dispatch(clickOnButtonEscapeAddNewCard());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCardModal);