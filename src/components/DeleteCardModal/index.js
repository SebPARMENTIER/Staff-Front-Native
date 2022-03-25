import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';

import PropTypes from 'prop-types';

const DeleteCardModal = ({
  onClickEscapeDeleteCardModal,
  onClickValidateDeleteCardModal,
  isDeleteCardModalError
}) => {
  // Close deleteCardModal and return to initial state when user aborts create new card modal
  const handleOnClickEscapeUpdateCardModal = () => {
    onClickEscapeDeleteCardModal();
  };

  // Close deleteCardModal and put cardDeleteSuccess to true to can back to /cards
  const handleOnClickValidateDeleteCardModal = () => {
    onClickValidateDeleteCardModal();
  };
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.deleteCardModal}>
      <View style={styles.deleteCardModalContainer}>
        <Text style={styles.deleteCardModalContainerHeader}>
          Supprimez une carte
        </Text>
        {!isDeleteCardModalError && (
          <Text style={styles.deleteCardModalContainerDesc}>
            Voulez-vous supprimer cette carte ?
          </Text>
        )}
        {isDeleteCardModalError && (
          <>
            <Text style={styles.deleteCardModalContainerError}>
              Une erreur s'est produite, veuillez réessayer.
            </Text>
            <TouchableOpacity
              style={styles.deleteCardModalContainerButtons}
              onPress={handleOnClickEscapeUpdateCardModal}
            >
              <Text
                style={styles.deleteCardModalContainerButtonsEscape}
              >
                Annuler
              </Text>
            </TouchableOpacity>
          </>
        )}
        {!isDeleteCardModalError && (
          <View>
            <TouchableOpacity
              style={styles.deleteCardModalContainerButtons}
              onPress={handleOnClickValidateDeleteCardModal}
            >
              <Text
                style={styles.deleteCardModalContainerButtonsValidate}
              >
                Valider
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              sytle={styles.deleteCardModalContainerButtons}
              onPress={handleOnClickEscapeUpdateCardModal}
            >
              <Text
                style={styles.deleteCardModalContainerButtonsEscape}
                
              >
                Annuler
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  deleteCardModal: {
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
  }
});

DeleteCardModal.propTypes = {
  onClickEscapeDeleteCardModal: PropTypes.func.isRequired,
  onClickValidateDeleteCardModal: PropTypes.func.isRequired,
  isDeleteCardModalError: PropTypes.bool.isRequired
};

export default DeleteCardModal;