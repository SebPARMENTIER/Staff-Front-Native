import { connect } from 'react-redux';

import Card from '../../components/Card';

import {
  clickOnButtonUpdateCard,
  clickOnButtonDeleteCard,
  cardDeleteSuccessToFalse
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  cardsName: state.cards.cardsName,
  openUpdateCardModal: state.card.openUpdateCardModal,
  openDeleteCardModal: state.card.openDeleteCardModal,
  cardDeleteSuccess: state.card.cardDeleteSuccess
});

const mapDispatchToProps = (dispatch) => ({
  onClickUpdateCardModal: (value1, value2, value3) => {
    dispatch(clickOnButtonUpdateCard(value1, value2, value3));
  },
  onClickDeleteCardModal: (value) => {
    dispatch(clickOnButtonDeleteCard(value));
  },
  setCardDeleteSuccessToFalse: () => {
    dispatch(cardDeleteSuccessToFalse());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
