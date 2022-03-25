import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';

import PropTypes from 'prop-types';

import Field from '../Field';
import FieldTextarea from '../FieldTextarea';

const UpdateCardModal = ({
  newTitle,
  newDescription,
  changeField,
  handleUpdateCardModal,
  onClickEscapeUpdateCardModal,
  isUpdateCardModalError
}) => {
  // Close updateCardModal and submit update card form
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateCardModal();
  };

  // Close updateCardModal and return to initial state when user aborts create new card modal
  const handleOnClickEscapeUpdateCardModal = () => {
    onClickEscapeUpdateCardModal();
  };
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.updateCardModal}>
      <View style={styles.updateCardModalContainer}>
        <Text style={styles.updateCardModalContainerHeader}>
          Modifiez une carte
        </Text>
        <SafeAreaView style={styles.updateCardModalContainerForm}>
          {!isUpdateCardModalError && (
            <View>
              <Field
                name="newTitle"
                placeholder="Nom de la carte..."
                value={newTitle}
                onChange={changeField}
              />
              <FieldTextarea
                name="newDescription"
                placeholder="Description de la carte..."
                value={newDescription}
                onChange={changeField}
              />
            </View>
          )}
          {isUpdateCardModalError && (
            <>
              <Text style={styles.updateCardModalContainerFormError}>
                Une erreur s'est produite, veuillez réessayer.
              </Text>
              <TouchableOpacity
                style={styles.updateCardModalContainerFormButton}
                onPress={handleOnClickEscapeUpdateCardModal}
              >
                <Text style={styles.updateCardModalContainerFormButtonsEscape}>
                  Annuler
                </Text>
              </TouchableOpacity>
            </>
          )}
          {!isUpdateCardModalError && (
            <>
              <View style={styles.updateCardModalContainerFormButtons}>
                <TouchableOpacity
                  style={styles.updateCardModalContainerFormButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.updateCardModalContainerFormButtonsValidate}>
                    Valider
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.updateCardModalContainerFormButton}
                  onPress={handleOnClickEscapeUpdateCardModal}
                >
                  <Text style={styles.updateCardModalContainerFormButtonsEscape}>
                    Annuler
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  updateCardModal: {
    width: width,
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: 'rgba(129, 125, 125, 0.7)'
  },
  updateCardModalContainer: {
    backgroundColor: '#e1c699',
    width: '90%',
    maxHeight: '45%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  updateCardModalContainerHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'saddlebrown',
    marginBottom: 30
  },
  updateCardModalContainerForm: {
    width: '80%'
  },
  updateCardModalContainerFormError: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  updateCardModalContainerFormButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  updateCardModalContainerFormButton: {
    backgroundColor: '#77b5fe',
    padding: 10,
    borderRadius: 10,
  },
  updateCardModalContainerFormButtonsValidate: {
    color: 'white',
    fontWeight: 'bold'
  },
  updateCardModalContainerFormButtonsEscape: {
    color: 'white',
    fontWeight: 'bold'
  }
});

UpdateCardModal.propTypes = {
  newTitle: PropTypes.string.isRequired,
  newDescription: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdateCardModal: PropTypes.func.isRequired,
  onClickEscapeUpdateCardModal: PropTypes.func.isRequired,
  isUpdateCardModalError: PropTypes.bool.isRequired
};

UpdateCardModal.defaultProps = {
  title: '',
  description: ''
};

export default UpdateCardModal;
